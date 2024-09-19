<html>
    <body>
        <script>
       
         let a=prompt('enter first number')
         let b=prompt('enter second number')
         let c=prompt('enter operator')
         a=parseInt(a)
         b=parseInt(b)
       
        switch(c){
            case '+':
                alert(a+b);
                break
            case '-':
                alert(a-b);
                break
            case '*':
                alert(a*b);
                break
            case '/':
                alert(a/b);
                break
            case '%':
                alert(a%b);
                break
                default:
                    alert('not an operator')

        }
        </script>
    </body>
</html>
