

const main = async () => {

  const transactions = await hre.ethers.getContractFactory("transactions");
  const Transactions = await transactions.deploy();

  await Transactions.deployed();

  console.log("Transactions deployed to:", Transactions.address);
}

const runMain = async () => {
  try{
      await main();
      process.exit(0);
  } catch (error) {
      console.error(error);
      process.exit(1);
  }
}

runMain();