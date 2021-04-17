import { OnModuleInit } from "@nestjs/common";
import { ClientKafka } from "@nestjs/microservices";
import { Server, Socket } from "socket.io";
export declare class RoutesGateway implements OnModuleInit {
    private kafkaClient;
    private kafkaProducer;
    server: Server;
    constructor(kafkaClient: ClientKafka);
    onModuleInit(): Promise<void>;
    handleMessage(client: Socket, payload: {
        routeId: string;
    }): void;
    sendPosition(data: {
        clientId: string;
        routeId: string;
        position: [number, number];
        finished: boolean;
    }): void;
}
