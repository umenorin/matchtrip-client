import "./Button.scss"
export default function Button({children,onClick,type ,...atributes}:any){
    return<>
        <button className="button" onClick={onClick} type={type}{...atributes}>{children}</button>
    </>
}
