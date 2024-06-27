function noOpGet() {
  console.warn("SharedPreferences is not supported on this platform.");
  return null;
}

function noOpSet() {
  console.warn("SharedPreferences is not supported on this platform.");
}

export {
  noOpGet as contains,
  noOpGet as remove,
  noOpGet as clear,
  noOpGet as getString,
  noOpGet as getInt,
  noOpGet as getLong,
  noOpGet as getFloat,
  noOpGet as getBoolean,
  noOpSet as setString,
  noOpSet as setInt,
  noOpSet as setLong,
  noOpSet as setFloat,
  noOpSet as setBoolean,
  noOpSet as addChangeListener,
};
