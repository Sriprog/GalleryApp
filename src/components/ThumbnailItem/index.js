import './index.css'

const ThumbNailItem = props => {
  const {imageDetails, isActive, clickThumbnailItem} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails

  const thumbNailClassName = isActive ? `thumbnail active` : `thumbnail`
  const onClickFunction = () => {
    clickThumbnailItem(id)
  }

  return (
    <li className="thumbNailCon">
      <button
        type="button"
        className="thumbnail-button"
        onClick={onClickFunction}
      >
        <img
          className={thumbNailClassName}
          src={thumbnailUrl}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbNailItem
