class ApiUrls {
  private readonly origin =
    window.location.hostname === 'localhost' ? 'http://localhost:8080' : 'http://localhost:8080' // FIND ME - fix to prod URL when ready

  readonly health = `${this.origin}/health`
  readonly observe = `${this.origin}/observe`
  readonly email = `${this.origin}/email`
}

export const apiUrls = new ApiUrls()
