# Queue transaction model

Claims use row locks with `SKIP LOCKED`, visible timestamps and a timeout. Production adapters must write semantic values and delete the queue row in the same transaction. Failed calls write no decision; bounded retries end in a visible dead state. Queries should filter the target version column to exclude stale generations.
