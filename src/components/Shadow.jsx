import './css/Shadow.css'

const Shadow = ({backgroundColor, borderColor, shadowColor, opacity, borderRadius, borderSize, offSetX, offSetY, blurRadius}) => {
    return (
        <div className='shadow-preview' style={{
            backgroundColor: backgroundColor,
            opacity: opacity,
            borderRadius: `${borderRadius}px`,
            border: `${borderSize}px solid ${borderColor}`,
            boxShadow: `${offSetX}px ${offSetY}px ${blurRadius}px ${shadowColor}`
        }}></div>
    )
}

export default Shadow;