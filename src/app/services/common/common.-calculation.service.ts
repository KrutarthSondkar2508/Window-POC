import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonCalculationService {

  constructor() { }

  MetersPerSecondsToMilesPerHour(aMetersPerSeconds) {
    return (this.KilometersToMiles(aMetersPerSeconds * 3600.0 / 1000.0));
  };

  KilometersToMiles(aKilometers) {
    return (aKilometers / 1.6093440);
  };

  MilesPerHourToMetersPerSeconds(aMilesPerHour) {
    return (this.MilesToKilometers(aMilesPerHour) / 3600.0 * 1000.0);
  };

  MilesToKilometers(aMiles) {
    return (aMiles * 1.6093440);
  };

  KiloPascalToPSF(aKiloPascal) {
    return (aKiloPascal * 20.885434273);
  };

  PSFtoKiloPascal(aPSF) {
    return (aPSF / 20.885434273);
  };

  MillimetersToInches(aMillimeters) {
    return this.FixInches(aMillimeters / 25.4);
  };

  InchesToImperialObject(aInches) {
    let Result = { Feet: 0, Inches: 0, Sixteenths: 0 };
    let TmpValue = 0.0;

    TmpValue = aInches / 12.0;
    Result.Feet = parseInt(TmpValue.toString(), 10);

    TmpValue = (TmpValue - Result.Feet) * 12.0;
    Result.Inches = parseInt(TmpValue.toString(), 10);

    TmpValue = (TmpValue - Result.Inches) * 16.0;
    Result.Sixteenths = Math.round(TmpValue);

    if (Result.Sixteenths === 16) {
      Result.Inches = Result.Inches + 1;
      Result.Sixteenths = 0;
    }

    if (Result.Inches >= 12) {
      Result.Feet = Result.Feet + 1;
      Result.Inches = Result.Inches - 12;
    }

    return (Result);
  };

  ImperialObjectToInches(aImperialObject) {
    var Result = 0.0;

    Result = (aImperialObject.Feet * 12.0) + aImperialObject.Inches + (aImperialObject.Sixteenths / 16.0);
    Result = this.RoundOff(Result, 4);

    return (Result);
  };

  RoundOff(aValue, aDecimalPlaces) {
    var TmpNumber = aValue;

    TmpNumber = TmpNumber.toFixed(parseInt(aDecimalPlaces, 10));
    return (parseFloat(TmpNumber));
  };

  FixInches(aInches) {
    return (this.ImperialObjectToInches(this.InchesToImperialObject(aInches)));
  };

  TextToInches(aText, aIsInches) {
    let Result = 0.0,
      i = 0,
      k = 0,
      feet = 0.0,
      inches = 0.0,
      TmpStr = '',
      TmpFeetStr = '',
      TmpInchStr = '',
      TmpIsNegative = false;

    TmpStr = this.TrimString(aText);
    TmpStr = TmpStr.replace('+', '"');

    if (TmpStr === '') {
      TmpStr = '0';
    }

    if (TmpStr.substr(0, 1) === '-') {
      TmpStr = TmpStr.slice(1);
      TmpIsNegative = true;
      TmpStr = this.TrimString(TmpStr);
    }

    TmpStr = this.CleanDimensionalString(TmpStr);

    if (aIsInches === true) {
      if (TmpStr.indexOf('"') < 0) {
        TmpStr = TmpStr + '"';
      }
    }
    else {
      if (TmpStr.indexOf('"') < 0) {
        TmpStr = TmpStr + '-';
      }
    }
    //
    //  Look for any feet separator
    //
    i = TmpStr.indexOf("'");
    if (i < 0) {
      i = TmpStr.indexOf("-");
    }

    if (i >= 0) {
      TmpFeetStr = TmpStr.slice(0, i);
      TmpFeetStr = TmpFeetStr.replace("'", '');
      TmpFeetStr = TmpFeetStr.replace("-", '');
      TmpFeetStr = this.TrimString(TmpFeetStr);
      feet = this.FractionToDecimal(TmpFeetStr);
    }
    //
    //  Look for any inch separator
    //
    if (i < 0) {
      k = TmpStr.indexOf('"');
      if (k < 0) {
        k = TmpStr.indexOf("/");
      }
    }
    else {
      k = TmpStr.length;
    }

    if (k >= 0) {
      TmpInchStr = TmpStr.slice((i + 1), (k - i + 2));
      TmpInchStr = TmpInchStr.replace("'", '');
      TmpInchStr = TmpInchStr.replace('"', '');
      TmpInchStr = TmpInchStr.replace("-", '');
      TmpInchStr = this.TrimString(TmpInchStr);
      inches = this.FractionToDecimal(TmpInchStr);
    }

    Result = this.FixInches((feet * 12.0) + inches);
    if (TmpIsNegative === true) {
      Result = Result * (-1.0);
    }

    return (Result);
  };

  TrimString = function (str) {
    let i;
    str = str + '';
    str = str.replace(/^\s+/, '');
    for (i = str.length - 1; i >= 0; i -= 1) {
      if (/\S/.test(str.charAt(i))) {
        str = str.substring(0, i + 1);
        break;
      }
    }

    return str;
  };

  CleanDimensionalString(aText) {
    var result;
    result = this.TrimString(aText);
    result = result.replace(/[^.0-9\/\'\"\-\ ]/g, '');
    return (result);
  };

  FractionToDecimal(aFraction) {
    let TmpStr;

    TmpStr = aFraction.split(' ');
    for (var i = 0; i < TmpStr.length; i++) {
      var arr = (TmpStr[i] || "0").split('/');
      if (arr.length === 1) {
        arr.push("1");
      }
      TmpStr[i] = arr;
    }

    let result = 0;
    for (var i = 0; i < TmpStr.length; i++) {
      var numerator_num = TmpStr[i][0].split(".")
        , numerator_integer = parseInt(numerator_num[0] || "0", 10)
        , numerator_decimal = parseFloat("0." + (numerator_num[1] || "0"))
        , numerator_numerator = numerator_integer + numerator_decimal

        , denominator_num = TmpStr[i][1].split(".")
        , denominator_integer = parseInt(denominator_num[0] || "0", 10)
        , denominator_decimal = parseFloat("0." + (denominator_num[1] || "0"))
        , denominator_numerator = denominator_integer + denominator_decimal;

      result += (numerator_numerator / denominator_numerator);
    }


    if (isNaN(result)) {
      return 0;
    }
    return result;
  };

  InchesToMillimeters(aInches) {
    return (aInches * 25.4);
  };

  ValidateAndDecorateNumberField(aText, aIsInteger, numberOfDecimalPlaces, min, max, defaultValue, allowNegative = false) {
    const pad = "00000000000";
    let result;
    let IsNotNumberRegex = /[^.0-9]/g;

    if (allowNegative) {
      IsNotNumberRegex = /[^-.0-9]/g;
    }

    const HasMultipleDotsRegex = /[.]/g;
    const IsNotIntegerRegex = /[^0-9]/g;
    let regexResult;
    if (!aText) {
      if (defaultValue != undefined) {
        return aIsInteger ? defaultValue : numberOfDecimalPlaces ? defaultValue + "." + pad.slice(0, numberOfDecimalPlaces) : defaultValue + ".0";
      }
      else {
        return aIsInteger ? "0" : numberOfDecimalPlaces ? "0." + pad.slice(0, numberOfDecimalPlaces) : "0.0";
      }
    }
    aText = this.TrimString(aText + '');
    if (IsNotNumberRegex.test(aText)) {
      if (defaultValue != undefined) {
        return aIsInteger ? defaultValue : numberOfDecimalPlaces ? defaultValue + "." + pad.slice(0, numberOfDecimalPlaces) : defaultValue + ".0";
      } else {
        return aIsInteger ? "0" : numberOfDecimalPlaces ? "0." + pad.slice(0, numberOfDecimalPlaces) : "0.0";
      }

    } else if ((regexResult == aText.match(HasMultipleDotsRegex)) && regexResult?.length > 1) {
      if (defaultValue != undefined) {
        return aIsInteger ? defaultValue : numberOfDecimalPlaces ? defaultValue + "." + pad.slice(0, numberOfDecimalPlaces) : defaultValue + ".0";
      } else {

        return aIsInteger ? "0" : numberOfDecimalPlaces ? "0." + pad.slice(0, numberOfDecimalPlaces) : "0.0";
      }
    } else {
      result = parseFloat(aText);
      if (aIsInteger) {
        result = result.toFixed(0);
      }
      else if (numberOfDecimalPlaces)//&& (regexResult = aText.match(IsNotIntegerRegex)) && regexResult.length === 1)  commenting this  need to confirm with Matt
      {
        result = result.toFixed(numberOfDecimalPlaces);
      } else {
        result = result.toFixed(2);
      }
    }

    if ((min || min === 0) && result < min) {
      result = min;
    }
    if ((max || max === 0) && result > max) {
      result = max;
    }

    return result;
  };
}
