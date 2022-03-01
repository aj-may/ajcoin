module.exports = async ({deployments, getNamedAccounts}) => {
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();

    await deploy('AJCoin', {
        from: deployer,
        args: [],
        log: true,
    });
}