function canConstruct(ransomNote: string, magazine: string): boolean {
  let bucket: string[] = magazine.split('');
  let result = true;

  for ( const c of ransomNote.split('') ) {
    const i = bucket.indexOf(c);
    if ( i > -1 ) {
      bucket.splice(i, 1)
    } else {
      result = false;
      break;
    }
  }

  return result;
};

export default canConstruct;
