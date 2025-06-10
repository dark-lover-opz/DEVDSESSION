import os from "os";
import cluster from "cluster";
import { start, stop } from "./server.js";
import { logger } from "../lib/logger.js";

function createWorker(): void {
    const worker = cluster.fork();
    worker.on("exit", async (code: number) => {
        logger.debug(
            `Worker died, code: ${code}, Worker pid[${worker.process.pid}]`
        );
        stop()
            .then(() => {
                logger.debug("Server stopped successfully.");
                if (Object.keys(cluster.workers || {}).length === 0) {
                    logger.error(
                        `All workers have been killed. Exiting primary process, Worker pid[${worker.process.pid}]`
                    );
                    process.exit(1);
                } else {
                    if (code === 0) return; // return if no error
                    logger.error(
                        `An Error occured in worker, Restarting...,  Worker pid[${worker.process.pid}]`
                    );
                    createWorker();
                }
            })
            .catch((error) => {
                logger.error(
                    `Error stopping server: ${error},  Worker pid[${worker.process.pid}]`
                );
            });
    });
}

function killWorkers(): void {
    for (const workerId in cluster.workers) {
        cluster.workers[workerId]?.process.kill();
    }
}

export async function startServer(port: number): Promise<void> {
    if (cluster.isPrimary) {
        const numWorkers = os.availableParallelism();
        for (let i = 0; i < numWorkers; i++) {
            createWorker();
        }
        logger.info(`Primary: Server active on port :${port}`);
        const restartInterval = setInterval(() => {
            logger.info("Restarting server...");
            killWorkers();
            clearInterval(restartInterval);
            startServer(port);
        }, 3600 * 1000 * 24 * 7); // Restart every week
        process.on("SIGINT", () => {
            clearInterval(restartInterval);
            process.exit(0);
        });
    } else {
        await start(port);
    }
}
