type errorProps = {
    text: string
}
export default function ErrorMessage({ text }: errorProps) {
    return <div className="mb-2 p-2 bg-red-100 text-red-700 rounded">
        {text}
    </div>
}