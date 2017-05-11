'use strict';
/**
* Created by ajk on 12/16/15.
* Purpose: This file folds all the constants for the
*     OpenBCI Board
*/
const _ = require('lodash');

/** Turning channels off */
const obciChannelOff1 = '1';
const obciChannelOff2 = '2';
const obciChannelOff3 = '3';
const obciChannelOff4 = '4';

/** Turn channels on */
const obciChannelOn1 = '!';
const obciChannelOn2 = '@';
const obciChannelOn3 = '#';
const obciChannelOn4 = '$';

/** SD card Commands */
const obciSDLogForHour1 = 'G';
const obciSDLogForHour2 = 'H';
const obciSDLogForHour4 = 'J';
const obciSDLogForHour12 = 'K';
const obciSDLogForHour24 = 'L';
const obciSDLogForMin5 = 'A';
const obciSDLogForMin15 = 'S';
const obciSDLogForMin30 = 'F';
const obciSDLogForSec14 = 'a';
const obciSDLogStop = 'j';

/** SD Card String Commands */
const obciStringSDHour1 = '1hour';
const obciStringSDHour2 = '2hour';
const obciStringSDHour4 = '4hour';
const obciStringSDHour12 = '12hour';
const obciStringSDHour24 = '24hour';
const obciStringSDMin5 = '5min';
const obciStringSDMin15 = '15min';
const obciStringSDMin30 = '30min';
const obciStringSDSec14 = '14sec';

/** Stream Data Commands */
const obciStreamStart = 'b';
const obciStreamStop = 's';

/** Miscellaneous */
const obciMiscQueryRegisterSettings = '?';
const obciMiscSoftReset = 'v';
const obciMiscResend = 'o';

/** Possible number of channels */
const obciNumberOfChannelsJamar = 4;

/** Possible OpenBCI board types */
const obciBoardJamar = 'jamar';

/** Possible Simulator Line Noise injections */
const obciSimulatorLineNoiseHz60 = '60Hz';
const obciSimulatorLineNoiseHz50 = '50Hz';
const obciSimulatorLineNoiseNone = 'none';

/** Possible Simulator Fragmentation modes */
const obciSimulatorFragmentationRandom = 'random';
const obciSimulatorFragmentationFullBuffers = 'fullBuffers';
const obciSimulatorFragmentationOneByOne = 'oneByOne';
const obciSimulatorFragmentationNone = 'none';

/** Possible Sample Rates */
const obciSampleRate200 = 200;

/** Accel enable/disable commands */
const obciAccelStart = 'n';
const obciAccelStop = 'N';

/** Errors */
const errorNobleAlreadyScanning = 'Scan already under way';
const errorNobleNotAlreadyScanning = 'No scan started';
const errorNobleNotInPoweredOnState = 'Please turn blue tooth on.';
const errorInvalidByteLength = 'Invalid Packet Byte Length';
const errorInvalidByteStart = 'Invalid Start Byte';
const errorInvalidByteStop = 'Invalid Stop Byte';
const errorInvalidType = 'Invalid Type';
const errorTimeSyncIsNull = "'this.sync.curSyncObj' must not be null";
const errorTimeSyncNoComma = 'Missed the time sync sent confirmation. Try sync again';
const errorUndefinedOrNullInput = 'Undefined or Null Input';

/** Max Master Buffer Size */
const obciMasterBufferSize = 4096;

/** Impedance */
const obciImpedanceTextBad = 'bad';
const obciImpedanceTextNone = 'none';
const obciImpedanceTextGood = 'good';
const obciImpedanceTextInit = 'init';
const obciImpedanceTextOk = 'ok';

const obciImpedanceThresholdGoodMin = 0;
const obciImpedanceThresholdGoodMax = 5000;
const obciImpedanceThresholdOkMin = 5001;
const obciImpedanceThresholdOkMax = 10000;
const obciImpedanceThresholdBadMin = 10001;
const obciImpedanceThresholdBadMax = 1000000;

const obciImpedanceSeriesResistor = 2200; // There is a 2.2 k Ohm series resistor that must be subtracted

/** Simulator */
const obciSimulatorPortName = 'OpenBCISimulator';

/** Parse */
const obciParseFailure = 'Failure';
const obciParseSuccess = 'Success';

/** Simulator Board Configurations */
const obciSimulatorRawAux = 'rawAux';
const obciSimulatorStandard = 'standard';

/** Emitters */
const obciEmitterAccelerometer = 'accelerometer';
const obciEmitterBlePoweredUp = 'blePoweredOn';
const obciEmitterClose = 'close';
const obciEmitterDroppedPacket = 'droppedPacket';
const obciEmitterError = 'error';
const obciEmitterJamarFound = 'jamarFound';
const obciEmitterImpedance = 'impedance';
const obciEmitterMessage = 'message';
const obciEmitterQuery = 'query';
const obciEmitterRawDataPacket = 'rawDataPacket';
const obciEmitterReady = 'ready';
const obciEmitterSample = 'sample';
const obciEmitterSynced = 'synced';

/** Accel packets */
const obciJamarAccelAxisX = 1;
const obciJamarAccelAxisY = 2;
const obciJamarAccelAxisZ = 3;

/** Accel scale factor */
const obciJamarAccelScaleFactor = 0.032; // mG per count

/** Jamar */
const obciJamarBleSearchTime = 20000; // ms
const obciJamarByteIdUncompressed = 0;
const obciJamarByteId18Bit = {
  max: 100,
  min: 1
};
const obciJamarByteId19Bit = {
  max: 200,
  min: 101
};
const obciJamarByteIdImpedanceChannel1 = 201;
const obciJamarByteIdImpedanceChannel2 = 202;
const obciJamarByteIdImpedanceChannel3 = 203;
const obciJamarByteIdImpedanceChannel4 = 204;
const obciJamarByteIdImpedanceChannelReference = 205;
const obciJamarByteIdMultiPacket = 206;
const obciJamarByteIdMultiPacketStop = 207;
const obciJamarPacketSize = 20;
const obciJamarSamplesPerPacket = 2;
const obciJamarPacket18Bit = {
  auxByte: 20,
  byteId: 0,
  dataStart: 1,
  dataStop: 19
};
const obciJamarPacket19Bit = {
  byteId: 0,
  dataStart: 1,
  dataStop: 20
};
const obciJamarMCP3912Gain = 1.0;  // assumed gain setting for MCP3912.  NEEDS TO BE ADJUSTABLE JM
const obciJamarMCP3912Vref = 1.2;  // reference voltage for ADC in MCP3912 set in hardware
const obciJamarPrefix = 'Jamar';
const obciJamarSyntheticDataEnable = 't';
const obciJamarSyntheticDataDisable = 'T';
const obciJamarImpedanceStart = 'z';
const obciJamarImpedanceStop = 'Z';
const obciJamarScaleFactorPerCountVolts = obciJamarMCP3912Vref / (8388607.0 * obciJamarMCP3912Gain * 1.5 * 51.0);

/** Jamar */
const jamarUuidService = '6e400001b5a3f393e0a9e50e24dcca9e'
const jamarUuidReceive = '6e400003b5a3f393e0a9e50e24dcca9e'
const jamarUuidSend = '6e400002b5a3f393e0a9e50e24dcca9e'
const jamarUuidDisconnect = '2a04'

/* OSC */
const OSClocalAddress = '127.0.0.1'
const OSClocalPort = 57121
const OSCremoteAddress = '127.0.0.1'
const OSCremotePort = 57119

/** Noble */
const obciNobleEmitterPeripheralConnect = 'connect';
const obciNobleEmitterPeripheralDisconnect = 'disconnect';
const obciNobleEmitterPeripheralDiscover = 'discover';
const obciNobleEmitterPeripheralServicesDiscover = 'servicesDiscover';
const obciNobleEmitterServiceCharacteristicsDiscover = 'characteristicsDiscover';
const obciNobleEmitterServiceRead = 'read';
const obciNobleEmitterDiscover = 'discover';
const obciNobleEmitterScanStart = 'scanStart';
const obciNobleEmitterScanStop = 'scanStop';
const obciNobleEmitterStateChange = 'stateChange';
const obciNobleStatePoweredOn = 'poweredOn';

module.exports = {
  /* OSC */
  OSCLocalAddress: OSClocalAddress,
  OSCLocalPort: OSClocalPort,
  OSCRemoteAddress: OSCremoteAddress,
  OSCRemotePort: OSCremotePort,

  /** Turning channels off */
  OBCIChannelOff1: obciChannelOff1,
  OBCIChannelOff2: obciChannelOff2,
  OBCIChannelOff3: obciChannelOff3,
  OBCIChannelOff4: obciChannelOff4,
  /**
  * Purpose: To get the proper command to turn a channel off
  * @param channelNumber - A number (1-16) of the desired channel
  * @returns {Promise}
  */
  commandChannelOff: function (channelNumber) {
    return new Promise(function (resolve, reject) {
      switch (channelNumber) {
        case 1:
          resolve(obciChannelOff1);
          break;
        case 2:
          resolve(obciChannelOff2);
          break;
        case 3:
          resolve(obciChannelOff3);
          break;
        case 4:
          resolve(obciChannelOff4);
          break;
        default:
          reject('Error [commandChannelOff]: Invalid Channel Number');
          break;
      }
    });
  },
  /** Turning channels on */
  OBCIChannelOn1: obciChannelOn1,
  OBCIChannelOn2: obciChannelOn2,
  OBCIChannelOn3: obciChannelOn3,
  OBCIChannelOn4: obciChannelOn4,
  commandChannelOn: function (channelNumber) {
    return new Promise(function (resolve, reject) {
      switch (channelNumber) {
        case 1:
          resolve(obciChannelOn1);
          break;
        case 2:
          resolve(obciChannelOn2);
          break;
        case 3:
          resolve(obciChannelOn3);
          break;
        case 4:
          resolve(obciChannelOn4);
          break;
        default:
          reject('Error [commandChannelOn]: Invalid Channel Number');
          break;
      }
    });
  },
  /** SD card Commands */
  OBCISDLogForHour1: obciSDLogForHour1,
  OBCISDLogForHour2: obciSDLogForHour2,
  OBCISDLogForHour4: obciSDLogForHour4,
  OBCISDLogForHour12: obciSDLogForHour12,
  OBCISDLogForHour24: obciSDLogForHour24,
  OBCISDLogForMin5: obciSDLogForMin5,
  OBCISDLogForMin15: obciSDLogForMin15,
  OBCISDLogForMin30: obciSDLogForMin30,
  OBCISDLogForSec14: obciSDLogForSec14,
  OBCISDLogStop: obciSDLogStop,
  /** SD Card String Commands */
  OBCIStringSDHour1: obciStringSDHour1,
  OBCIStringSDHour2: obciStringSDHour2,
  OBCIStringSDHour4: obciStringSDHour4,
  OBCIStringSDHour12: obciStringSDHour12,
  OBCIStringSDHour24: obciStringSDHour24,
  OBCIStringSDMin5: obciStringSDMin5,
  OBCIStringSDMin15: obciStringSDMin15,
  OBCIStringSDMin30: obciStringSDMin30,
  OBCIStringSDSec14: obciStringSDSec14,
  /**
  * @description Converts a sd string into the proper setting.
  * @param stringCommand {String} - The length of time you want to record to the SD for.
  * @returns {Promise} The command to send to the Board, returns an error on improper `stringCommand`
  */
  sdSettingForString: (stringCommand) => {
    return new Promise((resolve, reject) => {
      switch (stringCommand) {
        case obciStringSDHour1:
          resolve(obciSDLogForHour1);
          break;
        case obciStringSDHour2:
          resolve(obciSDLogForHour2);
          break;
        case obciStringSDHour4:
          resolve(obciSDLogForHour4);
          break;
        case obciStringSDHour12:
          resolve(obciSDLogForHour12);
          break;
        case obciStringSDHour24:
          resolve(obciSDLogForHour24);
          break;
        case obciStringSDMin5:
          resolve(obciSDLogForMin5);
          break;
        case obciStringSDMin15:
          resolve(obciSDLogForMin15);
          break;
        case obciStringSDMin30:
          resolve(obciSDLogForMin30);
          break;
        case obciStringSDSec14:
          resolve(obciSDLogForSec14);
          break;
        default:
          reject(new Error(TypeError));
          break;

      }
    });
  },
  /** Stream Data Commands */
  OBCIStreamStart: obciStreamStart,
  OBCIStreamStop: obciStreamStop,
  /** Miscellaneous */
  OBCIMiscQueryRegisterSettings: obciMiscQueryRegisterSettings,
  OBCIMiscSoftReset: obciMiscSoftReset,
  OBCIMiscResend: obciMiscResend,
  /** Possible number of channels */
  OBCINumberOfChannelsJamar: obciNumberOfChannelsJamar,
  /** Possible OpenBCI board types */
  OBCIBoardJamar: obciBoardJamar,
  /** Possible Sample Rates */
  OBCISampleRate200: obciSampleRate200,
  /** Accel enable/disable commands */
  OBCIAccelStart: obciAccelStart,
  OBCIAccelStop: obciAccelStop,
  /** Accel scale factor */
  OBCIJamarAccelScaleFactor: obciJamarAccelScaleFactor,
  /** Errors */
  OBCIEmitterAccelerometer: obciEmitterAccelerometer,
  OBCIErrorNobleAlreadyScanning: errorNobleAlreadyScanning,
  OBCIErrorNobleNotAlreadyScanning: errorNobleNotAlreadyScanning,
  OBCIErrorNobleNotInPoweredOnState: errorNobleNotInPoweredOnState,
  OBCIErrorInvalidByteLength: errorInvalidByteLength,
  OBCIErrorInvalidByteStart: errorInvalidByteStart,
  OBCIErrorInvalidByteStop: errorInvalidByteStop,
  OBCIErrorInvalidType: errorInvalidType,
  OBCIErrorTimeSyncIsNull: errorTimeSyncIsNull,
  OBCIErrorTimeSyncNoComma: errorTimeSyncNoComma,
  OBCIErrorUndefinedOrNullInput: errorUndefinedOrNullInput,
  /** Max Master Buffer Size */
  OBCIMasterBufferSize: obciMasterBufferSize,
  /** Impedance */
  OBCIImpedanceTextBad: obciImpedanceTextBad,
  OBCIImpedanceTextGood: obciImpedanceTextGood,
  OBCIImpedanceTextInit: obciImpedanceTextInit,
  OBCIImpedanceTextOk: obciImpedanceTextOk,
  OBCIImpedanceTextNone: obciImpedanceTextNone,
  OBCIImpedanceThresholdBadMax: obciImpedanceThresholdBadMax,
  OBCIImpedanceSeriesResistor: obciImpedanceSeriesResistor,
  getTextForRawImpedance: (value) => {
    if (value > obciImpedanceThresholdGoodMin && value < obciImpedanceThresholdGoodMax) {
      return obciImpedanceTextGood;
    } else if (value > obciImpedanceThresholdOkMin && value < obciImpedanceThresholdOkMax) {
      return obciImpedanceTextOk;
    } else if (value > obciImpedanceThresholdBadMin && value < obciImpedanceThresholdBadMax) {
      return obciImpedanceTextBad;
    } else {
      return obciImpedanceTextNone;
    }
  },
  /** Simulator */
  OBCISimulatorPortName: obciSimulatorPortName,
  /** Possible Simulator Line Noise injections */
  OBCISimulatorLineNoiseHz60: obciSimulatorLineNoiseHz60,
  OBCISimulatorLineNoiseHz50: obciSimulatorLineNoiseHz50,
  OBCISimulatorLineNoiseNone: obciSimulatorLineNoiseNone,
  /** Possible Simulator Fragmentation modes */
  OBCISimulatorFragmentationRandom: obciSimulatorFragmentationRandom,
  OBCISimulatorFragmentationFullBuffers: obciSimulatorFragmentationFullBuffers,
  OBCISimulatorFragmentationOneByOne: obciSimulatorFragmentationOneByOne,
  OBCISimulatorFragmentationNone: obciSimulatorFragmentationNone,
  /** Parse */
  OBCIParseFailure: obciParseFailure,
  OBCIParseSuccess: obciParseSuccess,
  /** Simulator Board Configurations */
  OBCISimulatorRawAux: obciSimulatorRawAux,
  OBCISimulatorStandard: obciSimulatorStandard,
  /** Emitters */
  OBCIEmitterBlePoweredUp: obciEmitterBlePoweredUp,
  OBCIEmitterClose: obciEmitterClose,
  OBCIEmitterDroppedPacket: obciEmitterDroppedPacket,
  OBCIEmitterError: obciEmitterError,
  OBCIEmitterJamarFound: obciEmitterJamarFound,
  OBCIEmitterImpedance: obciEmitterImpedance,
  OBCIEmitterMessage: obciEmitterMessage,
  OBCIEmitterQuery: obciEmitterQuery,
  OBCIEmitterRawDataPacket: obciEmitterRawDataPacket,
  OBCIEmitterReady: obciEmitterReady,
  OBCIEmitterSample: obciEmitterSample,
  OBCIEmitterSynced: obciEmitterSynced,
  /** Accel packets */
  OBCIJamarAccelAxisX: obciJamarAccelAxisX,
  OBCIJamarAccelAxisY: obciJamarAccelAxisY,
  OBCIJamarAccelAxisZ: obciJamarAccelAxisZ,
  /** Jamar */
  OBCIJamarBleSearchTime: obciJamarBleSearchTime,
  OBCIJamarByteIdUncompressed: obciJamarByteIdUncompressed,
  OBCIJamarByteId18Bit: obciJamarByteId18Bit,
  OBCIJamarByteId19Bit: obciJamarByteId19Bit,
  OBCIJamarByteIdImpedanceChannel1: obciJamarByteIdImpedanceChannel1,
  OBCIJamarByteIdImpedanceChannel2: obciJamarByteIdImpedanceChannel2,
  OBCIJamarByteIdImpedanceChannel3: obciJamarByteIdImpedanceChannel3,
  OBCIJamarByteIdImpedanceChannel4: obciJamarByteIdImpedanceChannel4,
  OBCIJamarByteIdImpedanceChannelReference: obciJamarByteIdImpedanceChannelReference,
  OBCIJamarByteIdMultiPacket: obciJamarByteIdMultiPacket,
  OBCIJamarByteIdMultiPacketStop: obciJamarByteIdMultiPacketStop,
  OBCIJamarMCP3912Gain: obciJamarMCP3912Gain,  // assumed gain setting for MCP3912.  NEEDS TO BE ADJUSTABLE JM
  OBCIJamarMCP3912Vref: obciJamarMCP3912Vref,  // reference voltage for ADC in MCP3912 set in hardware
  OBCIJamarPacketSize: obciJamarPacketSize,
  OBCIJamarPacket18Bit: obciJamarPacket18Bit,
  OBCIJamarPacket19Bit: obciJamarPacket19Bit,
  OBCIJamarPrefix: obciJamarPrefix,
  OBCIJamarSamplesPerPacket: obciJamarSamplesPerPacket,
  OBCIJamarSyntheticDataEnable: obciJamarSyntheticDataEnable,
  OBCIJamarSyntheticDataDisable: obciJamarSyntheticDataDisable,
  OBCIJamarImpedanceStart: obciJamarImpedanceStart,
  OBCIJamarImpedanceStop: obciJamarImpedanceStop,
  OBCIJamarScaleFactorPerCountVolts: obciJamarScaleFactorPerCountVolts,

  /** jamar */
  jamarUuidService: jamarUuidService,
  jamarUuidReceive: jamarUuidReceive,
  jamarUuidSend: jamarUuidSend,
  jamarUuidDisconnect: jamarUuidDisconnect,

  /** Noble */
  OBCINobleEmitterPeripheralConnect: obciNobleEmitterPeripheralConnect,
  OBCINobleEmitterPeripheralDisconnect: obciNobleEmitterPeripheralDisconnect,
  OBCINobleEmitterPeripheralDiscover: obciNobleEmitterPeripheralDiscover,
  OBCINobleEmitterPeripheralServicesDiscover: obciNobleEmitterPeripheralServicesDiscover,
  OBCINobleEmitterServiceCharacteristicsDiscover: obciNobleEmitterServiceCharacteristicsDiscover,
  OBCINobleEmitterServiceRead: obciNobleEmitterServiceRead,
  OBCINobleEmitterDiscover: obciNobleEmitterDiscover,
  OBCINobleEmitterScanStart: obciNobleEmitterScanStart,
  OBCINobleEmitterScanStop: obciNobleEmitterScanStop,
  OBCINobleEmitterStateChange: obciNobleEmitterStateChange,
  OBCINobleStatePoweredOn: obciNobleStatePoweredOn,
  getPeripheralLocalNames,
  getPeripheralWithLocalName,
  getVersionNumber,
  isPeripheralJamar
};

/**
 * @description Get a list of local names from an array of peripherals
 */
function getPeripheralLocalNames (pArray) {
  return new Promise((resolve, reject) => {
    var list = [];
    _.forEach(pArray, (perif) => {
      list.push(perif.advertisement.localName);
    });
    if (list.length > 0) {
      return resolve(list);
    } else {
      return reject(`No peripherals discovered with prefix equal to ${k.OBCIJamarPrefix}`);
    }
  });
}

/**
 * @description Get a peripheral with a local name
 * @param `pArray` {Array} - Array of peripherals
 * @param `localName` {String} - The local name of the BLE device.
 */
function getPeripheralWithLocalName (pArray, localName) {
  return new Promise((resolve, reject) => {
    if (typeof (pArray) !== 'object') return reject(`pArray must be of type Object`);
    _.forEach(pArray, (perif) => {
      if (perif.advertisement.hasOwnProperty('localName')) {
        if (perif.advertisement.localName === localName) {
          return resolve(perif);
        }
      }
    });
    return reject(`No peripheral found with localName: ${localName}`);
  });
}

/**
* @description This function is used to extract the major version from a github
*  version string.
* @returns {Number} The major version number
*/
function getVersionNumber (versionStr) {
  return Number(versionStr[1]);
}

/**
 * @description Very safely checks to see if the noble peripheral is a
 *  jamar by way of checking the local name property.
 */
function isPeripheralJamar (peripheral) {
  if (peripheral) {
    if (peripheral.hasOwnProperty('advertisement')) {
      if (peripheral.advertisement !== null && peripheral.advertisement.hasOwnProperty('localName')) {
        if (peripheral.advertisement.localName !== undefined && peripheral.advertisement.localName !== null) {
          if (peripheral.advertisement.localName.indexOf(obciJamarPrefix) > -1) {
            return true;
          }
        }
      }
    }
  }
  return false;
}
