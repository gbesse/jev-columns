// Purpose: Guard the unwired paid worker provider.
if(!process.env.TYPESAFE_API_KEY)throw Error('Set TYPESAFE_API_KEY');throw Error('Live worker adapter not wired; zero requests made');
