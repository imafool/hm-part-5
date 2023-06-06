let COMMEN_VAR = 'COMMEN_VAR'

function handle() {
    console.log('common..' + COMMEN_VAR)
}

// module.exports = handle;
//     console.log(module.exports)

module.exports.myA = 'in Common'
module.exports.myB = function() {
    console.log('myB')
    return 'myB'
}