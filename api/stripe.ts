import stripe from "stripe";

export default (req: any, res: { send: (arg0: string) => any }) => {
  console.log(stripe);
  return res.send("Hello from stripe");
};
