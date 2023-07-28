import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class CalculationHelperService
{
  TextToFeetInches(value, div: number = 1): string {
    let _fitodbl = this.FeetInchesToText(String(value));

    if (_fitodbl != 0 && !isNaN(_fitodbl)) {
      value = _fitodbl;
      let feet: number;
      let inch: number = 0;
      let nths: number;
      let count: number;
      let temp: number;
      let ptr: number;
      let dstring: string;

      let add_negative: boolean = false;
      if (Math.abs(value) < 1 && value < 0.0)
        add_negative = true;

      feet = Math.trunc(value);
      ptr = value - feet;

      if (ptr) {
        temp = Math.abs(value - feet);
        temp *= 12;

        if (temp != 0) {
          //SS011-16782
          if (+(Math.round(temp * 100) / 100).toFixed(2) === 1.00)
            temp = 1;
          ptr = Math.trunc(temp);
          inch = ptr;

          //if (ptr) {
          switch (div) {
            case 1:
              temp = (temp - inch) * 16.0;
              ptr = Math.trunc(temp);
              nths = ptr;

              if (temp - nths > 0.5)
                nths++;

              break;
            case 2:
              temp = (temp - inch) * 64.0;
              ptr = Math.trunc(temp);
              nths = ptr;

              if (temp - nths > 0.5)
                nths++;
              break;
            default:
              temp = (temp - inch);
              nths = 0;
              break;
          }

          if (nths != 0) {
            count = 0;
            while ((nths % 2) == 0) {
              nths /= 2;
              count++;
            }

            if (div == 1) {
              switch (count) {
                case 0: dstring = `${nths}/16`;
                  break;

                case 1: dstring = `${nths}/8`;
                  break;

                case 2: dstring = `${nths}/4`;
                  break;

                case 3: dstring = `${nths}/2`;
                  break;

                case 4: dstring = '';
                  inch++;
                  if (inch == 12) {
                    inch = 0;
                    feet++;
                  }
                  break;
              }
            }
            else if (div == 2) {
              switch (count) {
                case 0: dstring = `${nths}/64`;
                  break;

                case 1: dstring = `${nths}/32`;
                  break;

                case 2: dstring = `${nths}/16`;
                  break;

                case 3: dstring = `${nths}/8`;
                  break;

                case 4: dstring = `${nths}/4`;
                  break;

                case 5: dstring = `${nths}/2`;
                  break;

                case 6: dstring = '';
                  inch++;
                  if (inch == 12) {
                    inch = 0;
                    feet++;
                  }
                  break;
              }
            }
          }
          else
            dstring = '';
          //}
        }
      }
      else
        dstring = '';

      if (dstring) {
        if (add_negative)
          return `-${feet}'-${inch} ${dstring}"`;
        else
          return `${feet}'-${inch} ${dstring}"`;
      }
      else {
        if (add_negative)
          return `-${feet}'-${inch}"`;
        else
          return `${feet}'-${inch}"`;
      }
    }
    else
      return "0'-0\"";
  }
  FeetInchesToText(value: string = ''): number {
    let feet: string;
    let inches: string;
    let str: string;

    let negative_flag: boolean = false;

    let out: number = 0.0;
    str = String(value);

    if (str.includes('-') && str.startsWith('-')) {
      negative_flag = true;
      str = str.substring(1);
    }

    if (!str.includes('-') && !str.includes('\'')) {
      if (!str.includes('\"')) {
        out = this.parse_number(str);
      }
      else {
        out = this.parse_number(str) / 12.0;
      }
    }
    else {
      let split = [];

      if (str.includes('\''))
        split = str.split('\'');
      else if (str.includes('-'))
        split = str.split('-');
      else
        split.push(str);

      if (split.length > 0)
        feet = split[0].replace(/[-\'"]/g, '');
      if (split.length > 1)
        inches = split[1].replace(/[-\'"]/g, '');

      if (feet) {
        out = this.parse_number(feet);
      }

      if (inches) {
        out += this.parse_number(inches) / 12.0;
      }
    }

    out *= ((negative_flag) ? -1 : 1);

    return out;
  }
  parse_number(value: string): number {
    //Changes done with Dhaval sir (SS011-16312)
    //value = value.replace(/\s+/g, '');

    let retVal: number = 0.0;

    let numerator: number;
    let divisor: number;

    let values;
    if (!value.includes('/')) {
      retVal = Number(value);
    }
    else {
      if (!value.includes(' ') && !value.includes('-'))
        numerator = Number(value.split('/')[0]);
      else {
        if (value.includes(" "))
          values = value.split(" ");
        if (value.includes("- "))
          values = value.split("- ");
        retVal = Number(values[0]);

        if (!values[1].includes('-'))
          numerator = Number(values[1].split('/')[0]);
      }

      divisor = Number(value.split('/')[1]);

      if (numerator > 0 && divisor > 0)
        retVal += (numerator / divisor);
    }
    return retVal;
  }
}
