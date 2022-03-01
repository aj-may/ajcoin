module.exports = async ({deployments, getNamedAccounts}) => {
    const { deploy, get } = deployments;
    const { deployer } = await getNamedAccounts();

    const ajCoin = await get('AJCoin');

    await deploy('AJMarket', {
        from: deployer,
        args: [ajCoin.address],
        log: true,
    });
}