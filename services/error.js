class ENotFount extends Error{};
class UnhandledError extends Error{};
class EDuplicate extends Error{};
class EPasswordDidntMatch extends Error{};
class AuthFail extends Error{};
class AuthorizationFail extends Error{};

module.exports = {
    ENotFount,
    UnhandledError,
    EDuplicate,
    EPasswordDidntMatch,
    AuthFail,
    AuthorizationFail
}