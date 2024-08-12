const GradientText = ({left,top,head,text}:{left:number,top:number,head:string,text:string})=>{
    return (<div style={{
        position:"absolute",
        left:left,
        top:top
    }}>
        <p className={'grad-text'} style={{fontSize:35}}>
           {head}
        </p>

        <div style={{fontSize:15, textAlign:'justify', width:750,marginTop:30}}>
            {text}
        </div>
    </div>)
}
export default GradientText;