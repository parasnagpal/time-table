window.onload=function (){
  let rowbtn=document.getElementById("row")
  let colbtn=document.getElementById("col")
  let rowinput=document.getElementById("nrow")
  let colinput=document.getElementById("ncol")
  

  let columns=[]
  let rows=[]

  function iniTable()
  {
      $("#table").append(
          $('<tr id="r0">').append('<td>')
      )
      for(let cols of columns)
       {
           $('#table#r0').append(
               $('<th>').text(cols)
           )
       }
  }
  iniTable()
  
  rowbtn.onclick=function f(){
      let val=rowinput.value
      rows.push(val)
    //Planting row in table
      $("#table").append(
          $(`<tr id="r${rows.length}">`).append(
                $("<th>").text(val)
                   )
      )
    //Rowdata
     for(let cols of columns)
       {
         $(`#r${rows.length}`).append(`<input type="text" id=r${rows.length}c${cols}>`)
       }  
  }
  
  colbtn.onclick=function f(){
    let val=colinput.value
    columns.push(val)
    $('#r0').append($('<th>').text(val))
    for(let i=1;i<=rows.length;i++)
    {
        $(`#r${i}`).append(`<input type="text" id=r${i}c${columns.length}>`)
    }
  }
  
  $('#done').click(()=>{
      let r=1,c;
      for(let row of rows)
      {
          c=1;
          for(let column of columns)
          {
            let cover=document.createElement("td")  
            let element=document.createElement("div")  
             element.innerText=$(`#r${r}c${c}`).val();
             element.id=`r${r}c${column}`
             cover.append(element)
             console.log(cover)
             $(`#r${r}c${c}`).replaceWith(cover)
             c++;
          }
          r++;
      }
  })
}