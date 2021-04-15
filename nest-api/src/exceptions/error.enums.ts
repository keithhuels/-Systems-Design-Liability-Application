export enum StandardError {
    Internal = 'Internal',
    Validation = 'Validation',
    Unauthorized = 'Unauthorized',
    NotFound = 'NotFound',
}

export enum LoginError {
    Internal = 'Internal',
    Validation = 'Validation',
    LoginFailed = 'LoginFailed',
}

export enum CreateLinksError {
    Internal = 'Internal',
    Validation = 'Validation',
    LoginFailed = 'LoginFailed',
    BadgeNotFound = 'BadgeNotFound',
    VendorNotFound = 'VendorNotFound',
}
