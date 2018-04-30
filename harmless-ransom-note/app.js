const harmlessRansomNote = (noteText, magazineText) => {
    let noteArr = noteText.split(' ');
    let magazineArr = magazineText.split(' ');
    let magazineObj = {};
    let isNoteValid = true;

    magazineArr.forEach(word => {
        if(!magazineObj[word]) 
            magazineObj[word] = 0; 
        magazineObj[word]++;
    });
    noteArr.forEach(word => {
        if (magazineObj[word]) {
             magazineObj[word]--;
          if (magazineObj[word] < 0) 
          isNoteValid = false;
        }
        else 
        isNoteValid = false; 
      });

    console.log(magazineObj);
    return isNoteValid;   
}

harmlessRansomNote("bad good","Sometimes, the world turns good people into bad people."); //console.log it will return true
