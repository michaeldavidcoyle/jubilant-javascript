const colors = ['red', 'orange', 'yellow', 'blue', 'purple'];

const lines = `%c          *          
          %cc          
         %c*%cco         
        code%c*        
       %c*%ccode%cup       
      %ccode%cup%c*%cco      
     code%cup %ccode     
    %ccode%cup%c* %ccode%cu    
   %c*%ccode%cup %ccode%cup%c*   
  %ccode%cup%c*%ccode%cup%c*%ccod  
 code%cup %ccode%cup%c*%ccode%cu 
%c*%ccode%cup%c*%ccode%cup%c*%ccode%cup          
%chappy holidays, code%cup`;

const size = '; font-size: 1.5em;';

const chars = [];

for (let i = 1; i < lines.length; i++) {
    if (lines[i] == '%') {
        chars.push(lines[i + 2]);
    }
}

let count = 0;

let seasonsGreetings = setInterval(() => {
    console.clear();

    let css = [`color: white; ${size}`];

    for (let i = 0; i < chars.length; i++) {
        let change = 'color: ';

        if (chars[i] == '*') {
            change += colors[count % colors.length];
            count++;
        } else if (chars[i] == 'u') {
            change += 'rgb(62, 77, 39)';
        } else {
            change += 'rgb(102, 149, 58)';
        }

        css.push(change + size);
    }

    console.log(lines, ...css);
}, 1500);