// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v0.4.0
//   protoc        v3.21.7

import { Writer, Reader, Protobuf } from "as-proto";
import { google } from "../../../../google";
import { cosmos } from "../../../../cosmos";

export class IdentifiedClientState {
  static encode(message: IdentifiedClientState, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.clientId);

    const clientState = message.clientState;
    if (clientState !== null) {
      writer.uint32(18);
      writer.fork();
      google.protobuf.Any.encode(clientState, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): IdentifiedClientState {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new IdentifiedClientState();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;

        case 2:
          message.clientState = google.protobuf.Any.decode(
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
  clientState: google.protobuf.Any | null;

  constructor(
    clientId: string = "",
    clientState: google.protobuf.Any | null = null
  ) {
    this.clientId = clientId;
    this.clientState = clientState;
  }
}

export function encodeIdentifiedClientState(
  message: IdentifiedClientState
): Uint8Array {
  return Protobuf.encode(message, IdentifiedClientState.encode);
}

export function decodeIdentifiedClientState(
  buffer: Uint8Array
): IdentifiedClientState {
  return Protobuf.decode<IdentifiedClientState>(
    buffer,
    IdentifiedClientState.decode
  );
}

export class ConsensusStateWithHeight {
  static encode(message: ConsensusStateWithHeight, writer: Writer): void {
    const height = message.height;
    if (height !== null) {
      writer.uint32(10);
      writer.fork();
      Height.encode(height, writer);
      writer.ldelim();
    }

    const consensusState = message.consensusState;
    if (consensusState !== null) {
      writer.uint32(18);
      writer.fork();
      google.protobuf.Any.encode(consensusState, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): ConsensusStateWithHeight {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new ConsensusStateWithHeight();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = Height.decode(reader, reader.uint32());
          break;

        case 2:
          message.consensusState = google.protobuf.Any.decode(
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

  height: Height | null;
  consensusState: google.protobuf.Any | null;

  constructor(
    height: Height | null = null,
    consensusState: google.protobuf.Any | null = null
  ) {
    this.height = height;
    this.consensusState = consensusState;
  }
}

export function encodeConsensusStateWithHeight(
  message: ConsensusStateWithHeight
): Uint8Array {
  return Protobuf.encode(message, ConsensusStateWithHeight.encode);
}

export function decodeConsensusStateWithHeight(
  buffer: Uint8Array
): ConsensusStateWithHeight {
  return Protobuf.decode<ConsensusStateWithHeight>(
    buffer,
    ConsensusStateWithHeight.decode
  );
}

export class ClientConsensusStates {
  static encode(message: ClientConsensusStates, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.clientId);

    const consensusStates = message.consensusStates;
    for (let i = 0; i < consensusStates.length; ++i) {
      writer.uint32(18);
      writer.fork();
      ConsensusStateWithHeight.encode(consensusStates[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): ClientConsensusStates {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new ClientConsensusStates();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;

        case 2:
          message.consensusStates.push(
            ConsensusStateWithHeight.decode(reader, reader.uint32())
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
  consensusStates: Array<ConsensusStateWithHeight>;

  constructor(
    clientId: string = "",
    consensusStates: Array<ConsensusStateWithHeight> = []
  ) {
    this.clientId = clientId;
    this.consensusStates = consensusStates;
  }
}

export function encodeClientConsensusStates(
  message: ClientConsensusStates
): Uint8Array {
  return Protobuf.encode(message, ClientConsensusStates.encode);
}

export function decodeClientConsensusStates(
  buffer: Uint8Array
): ClientConsensusStates {
  return Protobuf.decode<ClientConsensusStates>(
    buffer,
    ClientConsensusStates.decode
  );
}

export class ClientUpdateProposal {
  static encode(message: ClientUpdateProposal, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.title);

    writer.uint32(18);
    writer.string(message.description);

    writer.uint32(26);
    writer.string(message.subjectClientId);

    writer.uint32(34);
    writer.string(message.substituteClientId);
  }

  static decode(reader: Reader, length: i32): ClientUpdateProposal {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new ClientUpdateProposal();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.subjectClientId = reader.string();
          break;

        case 4:
          message.substituteClientId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  title: string;
  description: string;
  subjectClientId: string;
  substituteClientId: string;

  constructor(
    title: string = "",
    description: string = "",
    subjectClientId: string = "",
    substituteClientId: string = ""
  ) {
    this.title = title;
    this.description = description;
    this.subjectClientId = subjectClientId;
    this.substituteClientId = substituteClientId;
  }
}

export function encodeClientUpdateProposal(
  message: ClientUpdateProposal
): Uint8Array {
  return Protobuf.encode(message, ClientUpdateProposal.encode);
}

export function decodeClientUpdateProposal(
  buffer: Uint8Array
): ClientUpdateProposal {
  return Protobuf.decode<ClientUpdateProposal>(
    buffer,
    ClientUpdateProposal.decode
  );
}

export class UpgradeProposal {
  static encode(message: UpgradeProposal, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.title);

    writer.uint32(18);
    writer.string(message.description);

    const plan = message.plan;
    if (plan !== null) {
      writer.uint32(26);
      writer.fork();
      cosmos.upgrade.v1beta1.Plan.encode(plan, writer);
      writer.ldelim();
    }

    const upgradedClientState = message.upgradedClientState;
    if (upgradedClientState !== null) {
      writer.uint32(34);
      writer.fork();
      google.protobuf.Any.encode(upgradedClientState, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): UpgradeProposal {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new UpgradeProposal();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.plan = cosmos.upgrade.v1beta1.Plan.decode(
            reader,
            reader.uint32()
          );
          break;

        case 4:
          message.upgradedClientState = google.protobuf.Any.decode(
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

  title: string;
  description: string;
  plan: cosmos.upgrade.v1beta1.Plan | null;
  upgradedClientState: google.protobuf.Any | null;

  constructor(
    title: string = "",
    description: string = "",
    plan: cosmos.upgrade.v1beta1.Plan | null = null,
    upgradedClientState: google.protobuf.Any | null = null
  ) {
    this.title = title;
    this.description = description;
    this.plan = plan;
    this.upgradedClientState = upgradedClientState;
  }
}

export function encodeUpgradeProposal(message: UpgradeProposal): Uint8Array {
  return Protobuf.encode(message, UpgradeProposal.encode);
}

export function decodeUpgradeProposal(buffer: Uint8Array): UpgradeProposal {
  return Protobuf.decode<UpgradeProposal>(buffer, UpgradeProposal.decode);
}

@unmanaged
export class Height {
  static encode(message: Height, writer: Writer): void {
    writer.uint32(8);
    writer.uint64(message.revisionNumber);

    writer.uint32(16);
    writer.uint64(message.revisionHeight);
  }

  static decode(reader: Reader, length: i32): Height {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Height();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.revisionNumber = reader.uint64();
          break;

        case 2:
          message.revisionHeight = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  revisionNumber: u64;
  revisionHeight: u64;

  constructor(revisionNumber: u64 = 0, revisionHeight: u64 = 0) {
    this.revisionNumber = revisionNumber;
    this.revisionHeight = revisionHeight;
  }
}

export function encodeHeight(message: Height): Uint8Array {
  return Protobuf.encode(message, Height.encode);
}

export function decodeHeight(buffer: Uint8Array): Height {
  return Protobuf.decode<Height>(buffer, Height.decode);
}

export class Params {
  static encode(message: Params, writer: Writer): void {
    const allowedClients = message.allowedClients;
    if (allowedClients.length !== 0) {
      for (let i = 0; i < allowedClients.length; ++i) {
        writer.uint32(10);
        writer.string(allowedClients[i]);
      }
    }
  }

  static decode(reader: Reader, length: i32): Params {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Params();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowedClients.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  allowedClients: Array<string>;

  constructor(allowedClients: Array<string> = []) {
    this.allowedClients = allowedClients;
  }
}

export function encodeParams(message: Params): Uint8Array {
  return Protobuf.encode(message, Params.encode);
}

export function decodeParams(buffer: Uint8Array): Params {
  return Protobuf.decode<Params>(buffer, Params.decode);
}
