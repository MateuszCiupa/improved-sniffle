import { MethodLike } from "jayson";

const add: MethodLike = (args: any, callback: any) => {
  callback(null, args[0] + args[1]);
};

export default add;
