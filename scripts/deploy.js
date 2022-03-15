async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const HelloWorld = await ethers.getContractFactory("HelloWorld");
  const helloWorldContract = await HelloWorld.deploy("Hello World!");

  console.log("HelloWorld address:", helloWorldContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });