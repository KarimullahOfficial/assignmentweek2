function getLetter(s) {
    let letter;
    
    switch (s[0]) {
      case'a' || 'e' || 'o' || 'i' || 'u':
       
        return 1;
        break;
  
      case 'b' || 'c' || 'd' || 'f' || 'g':
        return 2;
        break;
  
      case 'h' || 'j' || 'k' || 'l' || 'm':
      return 3;
        break;
  
      case 'z' ||'v' ||'w' ||'x' ||  'y':
        return 4;
    }
  
    return letter;
  }