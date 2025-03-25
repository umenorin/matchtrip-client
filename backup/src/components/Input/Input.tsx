interface InputProps {
    name: string;
    getter: string;
    setter: (value: string) => void;
}

export default function Input({name,getter,setter}:InputProps){
    return(
        <>
            <input
                type={name}
                placeholder={name}
                value={getter}
                onChange={(e:any) => setter(e.target.value)}
            />
        </>
    )
}