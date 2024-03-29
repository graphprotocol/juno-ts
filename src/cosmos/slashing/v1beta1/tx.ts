// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v0.4.0
//   protoc        v3.21.7

import { Writer, Reader, Protobuf } from "as-proto";

export class MsgUnjail {
  static encode(message: MsgUnjail, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.validatorAddr);
  }

  static decode(reader: Reader, length: i32): MsgUnjail {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgUnjail();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  validatorAddr: string;

  constructor(validatorAddr: string = "") {
    this.validatorAddr = validatorAddr;
  }
}

export function encodeMsgUnjail(message: MsgUnjail): Uint8Array {
  return Protobuf.encode(message, MsgUnjail.encode);
}

export function decodeMsgUnjail(buffer: Uint8Array): MsgUnjail {
  return Protobuf.decode<MsgUnjail>(buffer, MsgUnjail.decode);
}

@unmanaged
export class MsgUnjailResponse {
  static encode(message: MsgUnjailResponse, writer: Writer): void {}

  static decode(reader: Reader, length: i32): MsgUnjailResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgUnjailResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  constructor() {}
}

export function encodeMsgUnjailResponse(
  message: MsgUnjailResponse
): Uint8Array {
  return Protobuf.encode(message, MsgUnjailResponse.encode);
}

export function decodeMsgUnjailResponse(buffer: Uint8Array): MsgUnjailResponse {
  return Protobuf.decode<MsgUnjailResponse>(buffer, MsgUnjailResponse.decode);
}
