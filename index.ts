import * as joi from 'joi';

export type Schema<T> = Partial<Record<keyof T, joi.AnySchema<any>>>;

/**
 * Requires that the property is an object that matches the given schema.
 */
export function object<T>(obj: Schema<T>) {
    return joi.object(obj as any as joi.SchemaMap);
}

/**
 * Matches any data type.
 */
export function any() {
    return joi.any();
}

/**
 * Strips the property from the validated object.
 */
export function strip() {
    return joi.any().strip();
}

/**
 * Requires that the property is a boolean.
 */
export function boolean() {
    const validator = joi.boolean();

    return validator;
}

/**
 * Requires that the property is a number.
 */
export function number() {
    const validator = joi.number();

    return validator;
}

/**
 * Requires that the property is one of the given numbers.
 */
export function numbers<T extends number>(...numbers: T[]) {
    const validator = joi.number().only(numbers);

    return validator;
}

/**
 * Requires that the property is a date.
 */
export function date() {
    const validator = joi.date();

    return validator;
}

/**
 * Requires that the property is greater than the given number.
 */
export function gt(mustBeGreaterThan: number) {
    const validator = joi.number().greater(mustBeGreaterThan);

    return validator;
}

/**
 * Requires that the property is greater than or equal to the given number.
 */
export function gte(mustBeGreaterThanOrEqualTo: number) {
    const validator = joi.number().greater(mustBeGreaterThanOrEqualTo).allow(mustBeGreaterThanOrEqualTo);

    return validator;
}

/**
 * Requires that the property is less than the given number.
 */
export function lt(mustBeLessThan: number) {
    const validator = joi.number().less(mustBeLessThan);

    return validator;
}

/**
 * Requires that the property is less than or equal to the given number.
 */
export function lte(mustBeLessThanOrEqualTo: number) {
    const validator = joi.number().less(mustBeLessThanOrEqualTo).allow(mustBeLessThanOrEqualTo);

    return validator;
}

/**
 * Requires that the property is a non-empty string.
 */
export function string() {
    const validator = joi.string();

    return validator;
}

/**
 * Requires that the property is a string that can be empty.
 */
export function stringOrEmpty() {
    const validator = joi.string().allow("");

    return validator;
}

/**
 * Requires that the property is a string equal to one of the given strings. Note: If you're trying to validate an array of strings, use the array function instead.
 */
export function onlyStrings<T extends string>(...strings: T[]) {
    const validator = joi.string().only(strings);

    return validator;
}

/**
 * Requires that the property is a string that's either empty, or equal to one of the given strings. Note: If you're trying to validate an array of strings, use the array function instead.
 */
export function onlyStringsOrEmpty<T extends string>(...strings: T[]) {
    const validator = joi.string().only(strings).allow("");

    return validator;
}

/**
 * Requires that the property is an array, with all items of the array matching with the given schema. 
 */
export function array(schema: joi.AnySchema<any>): any
export function array<T>(schema: Schema<T>): any
export function array(schema: any): any {
    const validator = joi.array().items(schema);

    return validator;
}

/**
 * Validates an object against a schema.
 * @param obj The object to validate.
 * @param againstSchema The schema to validate the object against.
 */
export function validate<T>(obj: any, againstSchema: joi.AnySchema<any>) {
    return joi.validate<T>(obj, againstSchema);
}