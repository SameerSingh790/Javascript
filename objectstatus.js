var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    },{
        author:'J.K Rowlings',
        title : 'Harry Potter',
        readingStatus : true

    },{
        author:'J.K Rowlings',
        title : 'Harry Potter and the half blood prince',
        readingStatus : false
    }];



const Read_or_Not = (array)=>{
    for(let i =0;i<array.length;i++)
    {

        let book = `"${array[i].author}" by "${array[i].title}"`
        if(array[i].readingStatus){
           console.log(`you already read it ${book}`);
        }else{
              console.log(`You did't read ${book}`)
        }
    }
}

Read_or_Not(library)

