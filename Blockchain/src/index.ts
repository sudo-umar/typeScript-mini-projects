class Block {
  public index: number;
  public hash: string;
  public prevHash: string;
  public transactionData: string;
  constructor(
    index: number,
    hash: string,
    prevHash: string,
    transactionData: string
  ) {
    this.index = index;
    this.hash = hash;
    this.prevHash = prevHash;
    this.transactionData = transactionData;
  }
}
// The first block of the blockchain is called the genesis block. We can hardcode it into our code.
const genesisBlock: Block = new Block(
  0,
  "9183929929sddf23uf76hn",
  null,
  "Genesis Block"
);
