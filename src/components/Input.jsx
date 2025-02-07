function Input(props) {
    return (
        <input 
        className="border border-slate1 outline-slate-400 px-4 py-2  rounded-md" 
        {...props} // vai colocar todas as props passadas pelo Input
        // o props será o type, placeholder, value e etc.
        />
    )
}

export default Input;