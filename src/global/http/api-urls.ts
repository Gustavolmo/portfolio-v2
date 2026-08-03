class ApiUrls {
  private readonly origin =
    window.location.hostname === 'localhost' ? 'http://localhost:8080' : 'https://api.example.com'

  readonly health = `${this.origin}/health`
  readonly observe = `${this.origin}/observe`
}

export const apiUrls = new ApiUrls()
