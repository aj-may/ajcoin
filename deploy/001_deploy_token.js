module.exports = async ({deployments, getNamedAccounts}) => {
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();

    console.log(deployer);

    await deploy('AJCoin', {
        from: deployer,
        args: [],
        log: true,
    });
}