// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v0.4.0
//   protoc        v3.21.7

import { Writer, Reader, Protobuf } from "as-proto";
import { commitment } from "../../commitment";

export class ConnectionEnd {
  static encode(message: ConnectionEnd, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.clientId);

    const versions = message.versions;
    for (let i = 0; i < versions.length; ++i) {
      writer.uint32(18);
      writer.fork();
      Version.encode(versions[i], writer);
      writer.ldelim();
    }

    writer.uint32(24);
    writer.int32(message.state);

    const counterparty = message.counterparty;
    if (counterparty !== null) {
      writer.uint32(34);
      writer.fork();
      Counterparty.encode(counterparty, writer);
      writer.ldelim();
    }

    writer.uint32(40);
    writer.uint64(message.delayPeriod);
  }

  static decode(reader: Reader, length: i32): ConnectionEnd {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new ConnectionEnd();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;

        case 2:
          message.versions.push(Version.decode(reader, reader.uint32()));
          break;

        case 3:
          message.state = reader.int32();
          break;

        case 4:
          message.counterparty = Counterparty.decode(reader, reader.uint32());
          break;

        case 5:
          message.delayPeriod = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  clientId: string;
  versions: Array<Version>;
  state: State;
  counterparty: Counterparty | null;
  delayPeriod: u64;

  constructor(
    clientId: string = "",
    versions: Array<Version> = [],
    state: State = 0,
    counterparty: Counterparty | null = null,
    delayPeriod: u64 = 0
  ) {
    this.clientId = clientId;
    this.versions = versions;
    this.state = state;
    this.counterparty = counterparty;
    this.delayPeriod = delayPeriod;
  }
}

export function encodeConnectionEnd(message: ConnectionEnd): Uint8Array {
  return Protobuf.encode(message, ConnectionEnd.encode);
}

export function decodeConnectionEnd(buffer: Uint8Array): ConnectionEnd {
  return Protobuf.decode<ConnectionEnd>(buffer, ConnectionEnd.decode);
}

export class IdentifiedConnection {
  static encode(message: IdentifiedConnection, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.id);

    writer.uint32(18);
    writer.string(message.clientId);

    const versions = message.versions;
    for (let i = 0; i < versions.length; ++i) {
      writer.uint32(26);
      writer.fork();
      Version.encode(versions[i], writer);
      writer.ldelim();
    }

    writer.uint32(32);
    writer.int32(message.state);

    const counterparty = message.counterparty;
    if (counterparty !== null) {
      writer.uint32(42);
      writer.fork();
      Counterparty.encode(counterparty, writer);
      writer.ldelim();
    }

    writer.uint32(48);
    writer.uint64(message.delayPeriod);
  }

  static decode(reader: Reader, length: i32): IdentifiedConnection {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new IdentifiedConnection();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.clientId = reader.string();
          break;

        case 3:
          message.versions.push(Version.decode(reader, reader.uint32()));
          break;

        case 4:
          message.state = reader.int32();
          break;

        case 5:
          message.counterparty = Counterparty.decode(reader, reader.uint32());
          break;

        case 6:
          message.delayPeriod = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  id: string;
  clientId: string;
  versions: Array<Version>;
  state: State;
  counterparty: Counterparty | null;
  delayPeriod: u64;

  constructor(
    id: string = "",
    clientId: string = "",
    versions: Array<Version> = [],
    state: State = 0,
    counterparty: Counterparty | null = null,
    delayPeriod: u64 = 0
  ) {
    this.id = id;
    this.clientId = clientId;
    this.versions = versions;
    this.state = state;
    this.counterparty = counterparty;
    this.delayPeriod = delayPeriod;
  }
}

export function encodeIdentifiedConnection(
  message: IdentifiedConnection
): Uint8Array {
  return Protobuf.encode(message, IdentifiedConnection.encode);
}

export function decodeIdentifiedConnection(
  buffer: Uint8Array
): IdentifiedConnection {
  return Protobuf.decode<IdentifiedConnection>(
    buffer,
    IdentifiedConnection.decode
  );
}

export class Counterparty {
  static encode(message: Counterparty, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.clientId);

    writer.uint32(18);
    writer.string(message.connectionId);

    const prefix = message.prefix;
    if (prefix !== null) {
      writer.uint32(26);
      writer.fork();
      commitment.v1.MerklePrefix.encode(prefix, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): Counterparty {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Counterparty();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;

        case 2:
          message.connectionId = reader.string();
          break;

        case 3:
          message.prefix = commitment.v1.MerklePrefix.decode(
            reader,
            reader.uint32()
          );
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  clientId: string;
  connectionId: string;
  prefix: commitment.v1.MerklePrefix | null;

  constructor(
    clientId: string = "",
    connectionId: string = "",
    prefix: commitment.v1.MerklePrefix | null = null
  ) {
    this.clientId = clientId;
    this.connectionId = connectionId;
    this.prefix = prefix;
  }
}

export function encodeCounterparty(message: Counterparty): Uint8Array {
  return Protobuf.encode(message, Counterparty.encode);
}

export function decodeCounterparty(buffer: Uint8Array): Counterparty {
  return Protobuf.decode<Counterparty>(buffer, Counterparty.decode);
}

export class ClientPaths {
  static encode(message: ClientPaths, writer: Writer): void {
    const paths = message.paths;
    if (paths.length !== 0) {
      for (let i = 0; i < paths.length; ++i) {
        writer.uint32(10);
        writer.string(paths[i]);
      }
    }
  }

  static decode(reader: Reader, length: i32): ClientPaths {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new ClientPaths();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.paths.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  paths: Array<string>;

  constructor(paths: Array<string> = []) {
    this.paths = paths;
  }
}

export function encodeClientPaths(message: ClientPaths): Uint8Array {
  return Protobuf.encode(message, ClientPaths.encode);
}

export function decodeClientPaths(buffer: Uint8Array): ClientPaths {
  return Protobuf.decode<ClientPaths>(buffer, ClientPaths.decode);
}

export class ConnectionPaths {
  static encode(message: ConnectionPaths, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.clientId);

    const paths = message.paths;
    if (paths.length !== 0) {
      for (let i = 0; i < paths.length; ++i) {
        writer.uint32(18);
        writer.string(paths[i]);
      }
    }
  }

  static decode(reader: Reader, length: i32): ConnectionPaths {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new ConnectionPaths();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;

        case 2:
          message.paths.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  clientId: string;
  paths: Array<string>;

  constructor(clientId: string = "", paths: Array<string> = []) {
    this.clientId = clientId;
    this.paths = paths;
  }
}

export function encodeConnectionPaths(message: ConnectionPaths): Uint8Array {
  return Protobuf.encode(message, ConnectionPaths.encode);
}

export function decodeConnectionPaths(buffer: Uint8Array): ConnectionPaths {
  return Protobuf.decode<ConnectionPaths>(buffer, ConnectionPaths.decode);
}

export class Version {
  static encode(message: Version, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.identifier);

    const features = message.features;
    if (features.length !== 0) {
      for (let i = 0; i < features.length; ++i) {
        writer.uint32(18);
        writer.string(features[i]);
      }
    }
  }

  static decode(reader: Reader, length: i32): Version {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Version();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identifier = reader.string();
          break;

        case 2:
          message.features.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  identifier: string;
  features: Array<string>;

  constructor(identifier: string = "", features: Array<string> = []) {
    this.identifier = identifier;
    this.features = features;
  }
}

export function encodeVersion(message: Version): Uint8Array {
  return Protobuf.encode(message, Version.encode);
}

export function decodeVersion(buffer: Uint8Array): Version {
  return Protobuf.decode<Version>(buffer, Version.decode);
}

@unmanaged
export class Params {
  static encode(message: Params, writer: Writer): void {
    writer.uint32(8);
    writer.uint64(message.maxExpectedTimePerBlock);
  }

  static decode(reader: Reader, length: i32): Params {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Params();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxExpectedTimePerBlock = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  maxExpectedTimePerBlock: u64;

  constructor(maxExpectedTimePerBlock: u64 = 0) {
    this.maxExpectedTimePerBlock = maxExpectedTimePerBlock;
  }
}

export function encodeParams(message: Params): Uint8Array {
  return Protobuf.encode(message, Params.encode);
}

export function decodeParams(buffer: Uint8Array): Params {
  return Protobuf.decode<Params>(buffer, Params.decode);
}

export enum State {
  STATE_UNINITIALIZED_UNSPECIFIED = 0,
  STATE_INIT = 1,
  STATE_TRYOPEN = 2,
  STATE_OPEN = 3,
}
