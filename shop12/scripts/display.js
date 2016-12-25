

$(document).ready(function(){
    
    var shopId = $("#shopId").val();
	var users = firebase.database().ref().child("shop_list").child(shopId);
    var count=1;
	users.on('child_added', function(data) {
        var userNodes = data.val();
        var adj= $('#adj'+count).html();
        var product = "";
        var adjFire = null;
        $.each(userNodes,function(i,childNodes){              
                var value = childNodes;
                var source = 'images/1481100048179.jpg?crc=3876888281';
            
                if(count>4){
                    return false; // Just to make sure that the loop doesnt execute after 4 products
                }
                if(i=='img'){
                  $('#img'+count).attr('src',value); //Replace source with value, the source image was for testing
                    $('#img'+count).attr('width',290);
                    $('#img'+count).attr('height',516);
                }
                if(i=='id'){
                    
                }
                if(i=='tag'){
                    var arr = value.split(' ');
                    $('#title'+count).html(arr[1]);// setting the fist tag as product title
                    product = arr[1];
                }
            if(i=='cost'){
                   
                  $('#costDiv'+count).html('<h1>Cost: '+value+'</h1>'); // setting the cost
                }
                
            
		});  
            adjFire = getRandomAdjective(product);
        if(adjFire!=''){
            $('#adj'+count).html('<h1>'+adjFire+'</h1>');
        }else{
             $('#adj'+count).html('<h1>'+adj+'</h1>');
        }
			count+=1;
});
	
});

function getRandomAdjective(str){
    var arr = getArray(str);
    if(arr != null){
        var min = 0;
        var max = arr.length-1;
        var random = Math.floor(Math.random() * (max - min + 1)) + min;
        return arr[random];
        
    }else{
        return "";
    }
}


function getArray(str){
    

    
    var arr;
    if(!str){
        return null;
    }
    
    if(str.search(/jacket/i)!=-1){
        arr = [
        "We have in store for you",
"We think you will love our",
"a must have......",
"a handpicked ....",
"our most loved",
"our most wanted",
"the best selling",
"newly arrived",
"classy",
"trendy",
"The best of",
"Just arrived on sale",
"Stunning",
"supercool",
"a party perfect",
"a travel essential",
"a winter essential"
    ];
       return arr; 
    }
    
    
    if(str.search(/shoe/i)!=-1){
        arr =[
        "We have in store for you",
"We think you will love our",
"a must have......",
"a handpicked ....",
"our most loved",
"our most wanted",
"the best selling",
"newly arrived",
"classy",
"trendy",
"The best of",
"Just arrived on sale",
"Stunning",
"supercool",
"a party perfect",
"a travel essential"
    ];
        return arr; 
    }
    
    
    if(str.search(/bag/i)!=-1){
        arr = [
        "We have in store for you",
"We think you will love our",
"a must have......",
"a handpicked ....",
"our most loved",
"our most wanted",
"the best selling",
"newly arrived",
"classy",
"trendy",
"The best of",
"Just arrived on sale",
"Stunning",
"supercool",
"a party perfect",
"a travel essential"
    ];
       return arr;  
    }
    
    
    if(str.search(/purse/i)!=-1){
        arr = [
        "We have in store for you",
"We think you will love our",
"a must have......",
"a handpicked ....",
"our most loved",
"our most wanted",
"the best selling",
"newly arrived",
"classy",
"trendy",
"The best of",
"Just arrived on sale",
"Stunning",
"supercool",
"a party perfect"
    ];
       return arr;  
    }
    
    
    if(str.search(/wallet/i)!=-1){
        arr = [
        "We have in store for you",
"We think you will love our",
"a must have......",
"a handpicked ....",
"our most loved",
"our most wanted",
"the best selling",
"newly arrived",
"classy",
"trendy",
"The best of",
"Just arrived on sale"
    ];
        return arr; 
    }
    
    
    if(str.search(/belt/i)!=-1){
        arr = [
        "We have in store for you",
"We think you will love our",
"a must have......",
"a handpicked ....",
"our most loved",
"our most wanted",
"the best selling",
"newly arrived",
"classy",
"trendy",
"The best of",
"Just arrived on sale",
"Stunning"
    ];
        return arr; 
    }
    
    
    if(str.search(/hat/i)!=-1){
        arr =[
        "We have in store for you",
"We think you will love our",
"a must have......",
"a handpicked ....",
"our most loved",
"our most wanted",
"the best selling",
"newly arrived",
"classy",
"trendy",
"The best of",
"Just arrived on sale",
"Stunning",
"supercool"
    ];
        return arr; return arr; 
    }
    
    
    if(str.search(/pot/i)!=-1){
        arr =[
        "We have in store for you",
"We think you will love our",
"a handpicked ....",
"our most loved",
"our most wanted",
"the best selling",
"newly arrived"
    ];
        return arr; 
    }
    
    
    if(str.search(/diya/i)!=-1){
        arr =[
        "We have in store for you",
"We think you will love our",
"a must have......",
"a handpicked ....",
"our most loved",
"our most wanted",
"the best selling",
"newly arrived",
"trendy",
"The best of",
"Just arrived on sale",
"Stunning"
    ];
        return arr; return arr; 
    }
    
    
    if(str.search(/lamp/i)!=-1){
        arr =[
        "We have in store for you",
"We think you will love our",
"a must have......",
"a handpicked ....",
"our most loved",
"our most wanted",
"the best selling",
"newly arrived",
"trendy",
"The best of"
    ];
        return arr; 
    }
    
        /*
     
     For any new products just add just copy paste the below code above this comment and change the search parameter to match the product name and the list of adjectives.
     
     if(str.search(/jacket/i)!=-1){
        arr = [
        "We have in store for you",
"We think you will love our",
"a must have......",
"a handpicked ....",
"our most loved",
"our most wanted",
"the best selling",
"newly arrived",
"classy",
"trendy",
"The best of",
"Just arrived on sale",
"Stunning",
"supercool",
"a party perfect",
"a travel essential",
"a winter essential"
    ];
       return arr; 
    }
*/
    
    return null;
}