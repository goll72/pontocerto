CREATE TYPE WEBAUTHN_ATT_TYPE AS ENUM ('direct', 'indirect', 'none');

CREATE TABLE "user" (
    "name" VARCHAR(64) PRIMARY KEY,

    -- String PHC codificada em Base64 com o hash da senha + salt
    "hashed_password" TEXT
);

CREATE TABLE "webauthn_credential" (
    user_name VARCHAR(64) NOT NULL REFERENCES "user" (name),

    public_key TEXT,

    att_type WEBAUTHN_ATT_TYPE NOT NULL,
    aaguid CHAR(36) DEFAULT '00000000-0000-0000-0000-000000000000',
    signature_count INT,

    created_on TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    last_used_on TIMESTAMPTZ,
    last_updated_on TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "a1_cert" (
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(64) NOT NULL REFERENCES "user" (name),

    enc_pkcs12_cert_data BYTEA NOT NULL,

    valid_not_before TIMESTAMP NOT NULL,
    valid_not_after TIMESTAMP NOT NULL,

    revoked_on TIMESTAMP
);
