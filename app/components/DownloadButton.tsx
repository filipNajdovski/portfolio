function DownloadButton() {
  return (
    <div className="my-3">
      {/* same glass-button treatment as the form submit buttons */}
      <a
        href="/Filip-Najdovski-CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="glass-button text-xs lg:text-sm no-underline"
      >
        View CV
      </a>
    </div>
  )
}
export default DownloadButton
