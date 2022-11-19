import { StyleSheet , Dimensions} from "react-native"

const height = Dimensions.get('window').height; 
const width = Dimensions.get('window').width;



const styles = StyleSheet.create({
    description:{
       marginTop:height*0.12,
       title:{
        fontFamily:'AppleSDGothicNeo-Medium',
        fontSize:width * 0.045, 
        fontWeight:'bold', 
        marginBottom:height*0.02,
       }
    },

    eProInfo_childs:{
        display:'flex', 
        flexDirection:'column', 
        justifyContent:'center', 

        child1:{
            fontFamily:'AppleSDGothicNeo-Medium',
            fontSize:width * 0.03, 
            fontWeight:'bold', 
        }, 
        child2:{
            fontFamily:'AppleSDGothicNeo-Medium',
            fontSize:width * 0.03, 
            fontWeight:'bold', 
        }, 
    },

    
    eProInfo:{
        width:width , 
        display:'flex', 
        flexDirection:'row', 
        padding:width*0.05,
        justifyContent:'space-between', 
       
        hisF_child:{
            
        }, 
        hisS_child:{
            position:'absolute', 
            zIndex:3,
            width:width*0.5,
            marginLeft:width*0.3,
            marginTop:height*0.3,
            height:height*0.6 , 
        }

    },
    eachchild_fchild:{
        display:'flex', 
        flexDirection:'row', 
        justifyContent:'space-between',
        padding:width*0.05,
    },
    productcontainer:{
        display:'flex', 
        flexDirection:'column', 
        marginTop:height*0.07,
        alignItems:'center',
    },
 
    containimage:{
        display:'flex', 
        justifyContent:'center', 
        alignItems:'center'
    },
    productone: {
        
        display:'flex', 
        flexDirection:'row', 
        justifyContent:'space-between',
        backgroundColor:'#b4cbf8', 
        borderRadius:width*0.03,
        width:width*0.95, 
        height:height*0.2,
        padding:width*0.02,

    },
    eachprof_child:{
        backgroundColor:'#2c80ec', 
        width:width,
        height:height*0.4,
        display:'flex',
        flexDirection:'column',
       
    },
    eachpros_child:{
        backgroundColor:'white', 
        width:width,        
        height:height*0.6,
        padding:width*0.05,
    },
    
    producttwo:{
        marginTop:width*0.1,
        display:'flex', 
        flexDirection:'row', 
        justifyContent:'space-between',
        backgroundColor:'#b4cbf8', 
        borderRadius:width*0.03,
        width:width*0.95, 
        height:height*0.2,
        padding:width*0.02,
    },
    intercircleone:{
        width:width*0.05, 
        height:height*0.003, 
        backgroundColor:'#ccc',
        
    },
    checkoutbutpar:{
        display:'flex', 
        flexDirection:'row',
        justifyContent:'center', 
        height:height*0.05,
        width:width,
        marginTop:width*0.05,
       
    },
    eachProductContainer:{
        display:'flex', 
        flexDirection:'column', 
        zIndex:1,
          
    },
    checkoutbut:{
        flexDirection:'row',
        backgroundColor:'#acf',
        display:'flex', 
        borderRadius:width*0.1,
        justifyContent:'center', 
        alignItems:'center',
        width:width*0.9,
    },
    follow:{
        padding:width*0.03,
        display:'flex', 
        flexDirection:'column',
        justifyContent:'center', 
        alignItems:'center', 
    },
    infoone:{
        fontFamily:'AppleSDGothicNeo-Medium',
        fontSize:width * 0.045, 
        fontWeight:'bold', 

    },
    mytot:{
        display:'flex', 
        flexDirection:'row', 
        width:width*0.9,
       justifyContent:'space-between',
       mytot_child: {
        fontFamily:'AppleSDGothicNeo-Medium',
        fontSize:width * 0.06, 
        
        fontWeight:'bold', 
       },
    },
    containfoot:{
      display:'flex', 
      flexDirection:'column', 
      width:width,
      alignItems:'center',
      justifyContent:'center',
      height:height*0.15, 
      position:'fixed', 
      marginBottom:height*0,
     
      
    },
    quantity_child:{
        fontFamily:'AppleSDGothicNeo-Medium',
        fontSize:width * 0.045, 
        fontWeight:'bold', 
    },
    addretrieve:{
        display:'flex',
        flexDirection:'row', 
        justifyContent:'space-between' ,
        width:width*0.3,

    },
    quantity:{
       display:'flex', 
       justifyContent:'center',
    },
    infotwo:{
        fontFamily:'AppleSDGothicNeo-Medium',
        fontSize:width * 0.045, 
        fontWeight:'bold', 
    }, 
    itemnumb:{
        fontFamily:'AppleSDGothicNeo-Medium',
        fontSize:width * 0.045, 
        fontWeight:'bold', 
    },

    containinfo:{
       
        display:'flex', 
        flexDirection:'column',
        padding:width*0.08,
        justifyContent:'space-between', 
        alignItems:'center', 

    },
    
    payementcont:{
        display:'flex', 
        flexDirection:'column',
    },

    containtitle:{
        display:'flex', 
        justifyContent:'center',
        alignItems:'center',
    }, 
    cartTitle:{
        fontFamily:'AppleSDGothicNeo-Medium',
        fontSize:width * 0.05, 
        fontWeight:'bold',
       
    }, 
    intercircleonechecked:{
        width:width*0.05, 
        height:height*0.003, 
        backgroundColor:'#acf',
    },
    circonechecked:{
        display:'flex',
        justifyContent:'center',
        width:width*0.07, 
        height:width*0.07, 
        borderRadius:width*0.07, 
        alignItems:'center', 
        backgroundColor:'#acf', 
    },

    circone:{
        display:'flex',
        justifyContent:'center',
        width:width*0.07, 
        height:width*0.07, 
        borderRadius:width*0.07, 
        alignItems:'center', 
        backgroundColor:'#ccc', 

    },
    cirone_fchild:{
        width:width*0.035, 
        height:width*0.035, 
        borderRadius:width*0.035,
        backgroundColor:'white', 
    },
    headercont:{
        padding:width*0.05,
        width:width, 
        height:height*0.1,
        display:'flex', 
        flexDirection:'row',
        justifyContent:'space-between',
      
    },
    containcircle:{
        display:'flex', 
        flexDirection:'row',
        height:height*0.05,
       
        alignItems:'center', 
    },
    checkoutinfo:{
       padding:width*0.05,
      display:'flex', 
      flexDirection:'column', 
      justifyContent:'center', 
      alignItems:'center',
      width:width,
      
      theText:{
        fontFamily:'AppleSDGothicNeo-Medium',
        fontSize:width * 0.047,  
      }, 

      inp:{
        backgroundColor:' #ccc',
        marginBottom:5,
        width:330,
        height:50,
        border:'solid', 
        borderWidth:width*0.001, 
        borderRadius:width*0.02,
        marginTop:width*0.1,
      }, 

      valider:{
        width:width*0.8, 
        backgroundColor:'#acf', 
        display:'flex', 
        justifyContent:'center', 
        flexDirection:'row',
        height:height*0.05, 
        borderRadius:height*0.01, 
        alignItems:'center', 
        marginTop:width*0.1,
      }

    },
    validation:{
        fontFamily:'AppleSDGothicNeo-Medium',
        fontSize:width * 0.045, 
        fontWeight:'bold',
    }, 

    container:{
        display:'flex', 
        flexDirection:'column',
        width: width, 
        height:height,
        zIndex:1,
    },
    footer_test:{
        color:'white',
        fontFamily:'AppleSDGothicNeo-Medium',
        fontSize:width * 0.045, 
        fontWeight:'bold',
    } ,

    divR:{
      marginLeft:width*0.02,
    }, 
    divL:{
        marginLeft:width*0.01,
        marginRight:width*0.02,
    }, 

    footer:{
       borderRadius:'10%',
       marginLeft:'auto',
       marginRight:'auto',
       width:width, 
       height:height*0.07, 
       position:'fixed',
       bottom:-height*0.14, 
       display:'flex', 
       backgroundColor:'white',
       width:width*0.8
    },
    footer_child:{
        marginLeft:'auto', 
        marginRight:'auto',
        display:'flex', 
        flexDirection:'row',
       
    },
    eachchild:{
       
        marginRight:width*0.09,
        display:'flex', 
        flexDirection:'row',
        justifyContent:'center', 
        alignItems:'center'
     },
    eachchild1:{
        borderRadius:'10%',
       backgroundColor:'#2c80ec',
       marginRight:width*0.09,
       display:'flex', 
       flexDirection:'row',
       justifyContent:'center', 
       alignItems:'center', 
       width:width*0.3,
       height:height*0.07,
    },
    secondchild:{
      width:width, 
      height:height*0.3, 
      display:'flex',

    },
    firstchild:{
        display:'flex', 
        flexDirection:'row', 
        width:width, 
        height:height*0.7, 
        zIndex:1, 
       
    }, 
    firstchild_childone:{
        padding:'7%',
        display:'flex',
        width:width*0.6, 
        height:height*0.7, 
       

    },
    firstchild_childtwo:{
        padding:'7%',
        display:'flex',
        width:width*0.4, 
        height:height*0.7, 
        backgroundColor:'#2c80ec',
        borderBottomLeftRadius:'20%',
    }, 
    circleone: {
      marginRight: 'auto',
      height:width/8, 
      width:width/8, 
      borderRadius:width/8,
      display:'flex', 
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'white',
      marginBottom:width/20,
        
    },
    title:{
        width:width*0.6,
        top:width*0.1
    }, 
    circletwo: {
        marginLeft: 'auto',
        height:width/8, 
        width:width/8, 
        borderRadius:width/8,
        display:'flex', 
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        
    },
    intermediateone:{
        zIndex:3 ,
        position:'absolute',
        width:width,
        marginTop:height*0.25,
        height: '15%', 
        
        
       
    },
   
    test:{
        width: width*0.7,
        
        display:'flex', 
        backgroundColor:'grey',
        height:height*0.2,
    },
  
    test2:{
         
    },   
    intermediatetwo:{
        zIndex:3 ,
        position:'absolute',
        marginTop:height*0.35,
        padding:'15%',
        width:width,
       
        
    },
    justapply:{
        display:'flex', 
        flexDirection:'row', 
        justifyContent:'space-between', 
    },
    intermediateone_childone:{
        width:width,
        display:'flex', 
        flexDirection:'row', 
        justifyContent:'space-between', 
        height: '100%', 
        padding:'4%',
        
      
    }, 
    intermediatetwo_childone:{
        overflow:'hidden',
        backgroundColor:'white',
        display:'flex',
        justifyContent:'center', 
        alignItems:'center',
        width:width*0.7,
        height:height*0.35,
        borderRadius:'10%',
        marginLeft:width*0.07
        
    },
    intermediatetwo_childtwo:{
        display:'flex', 
        flexDirection:'column', 
        justifyContent:'center', 
        alignItems:'center', 

    } ,
   
    box:{
        width:'20%',
        display:'flex', 
        justifyContent:'center',
        alignItems:'center', 
        height:'100%',
        border:'solid', 
        borderWidth:'1%',
        borderColor:'white',
        backgroundColor:'white',
        marginTop:'auto', 
        marginBottom:'auto',
        borderRadius:'8%',
      
     },
    title_childone:{
       fontSize:width/12,
       fontWeight:'bold',
       fontFamily:'AppleSDGothicNeo-Medium',
    }, 
    title_childtwo:{
        fontSize:width/10,
        fontWeight:'bold',
        fontFamily:'AppleSDGothicNeo-Medium',
    }, 
    productinfo_chilone:{
        fontFamily:'AppleSDGothicNeo-Medium',
        fontSize:width*0.06, 
        fontWeight:'bold'
        
    }, 
    productinfo_chiltwo:{
        fontFamily:'AppleSDGothicNeo-Medium',
        fontSize:width*0.04, 
        fontWeight:'bold'
        
    }
}) ; 

export default styles;