var nlobjSubRecord = function (recordtype, internalid) {
  var nlobjRecord = require('./nlobjRecord.js')
  var record = new nlobjRecord(recordtype, internalid);

  record.commit = function() {

  }

  record.cancel = function() {

  }

  return record

}

module.exports = nlobjSubRecord
