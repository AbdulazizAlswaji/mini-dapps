export const  shortenAddress = (address) => address != undefined ? address.slice(0,4) + '....' + address.slice(address.length - 4): 'none'
