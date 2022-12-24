javascript:(
    function(name){
        fetch('https://toprank-ict.github.io/bookmarklet/kaitori-biz.json')
        .then((response)=>{return response.json()})
        .then( (users)=>{
            console.log(users);
            users = users.reverse();
            div = document.createElement("div");
            formdom = 
            '<div style="margin:30px">'+
            'ユーザ選択 <select id="newmyselect"><option></option></select>'+
            '<button id="newmybutton">実行</button>'+
            '</div>';

            div.innerHTML = formdom;
            document.body.appendChild(div);

            myselect = document.getElementById('newmyselect');

            document.getElementById("newmybutton").addEventListener("click", function() {
                past();
            }, false);

            for(i=0; i<users.length; i++){
                var opt = document.createElement("option");
                opt.value = users[i].username;
                var str = document.createTextNode(users[i].label);
                opt.appendChild(str);
                myselect.insertBefore(opt, myselect.options[0]);
            }
        });

        function past(){
            myselect = document.getElementById('newmyselect');
            username = myselect.options[myselect.selectedIndex].value;
            namejp = myselect.options[myselect.selectedIndex].text;
           
        }
    }
)(
    'user1'
)
