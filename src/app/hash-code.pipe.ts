import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
 */
@Pipe({ name: 'hashCode' })
export class HashCodePipe implements PipeTransform {
  transform(value: string): number {
    let x = Array.from(value).reduce(
      (s: number, c: string) => (Math.imul(31, s) + c.charCodeAt(0)) | 0,
      0
    ) as number;
    return x;
  }
}
@Pipe({ name: 'abs' })
export class AbsPipe implements PipeTransform {
  transform(value: number): number {
    return Math.abs(value);
  }
}
