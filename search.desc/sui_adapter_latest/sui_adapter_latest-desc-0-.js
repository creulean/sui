searchState.loadedDescShard("sui_adapter_latest", 0, "Run the bytecode verifier with a meter limit\nGiven a list of <code>modules</code> and an <code>object_id</code>, mutate each …\nAll updates to a Arguments used in that Command\nWARNING! Using this mode will bypass all normal checks …\nthe gathered results from batched executions\nControls the calling of arbitrary Move functions\nControls the ability to instantiate any Move function …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nIf not set, the package ID should be calculated like an …\nDo not perform conservation checks after execution.\nInterface with the store necessary to execute a …\nSafety\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThis is used primarily for values that have <code>copy</code> but not …\nUsed to remember the object ID and owner even if the value …\nTracks all gas operations for a single transaction. This …\nEntry point for gas charging.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nResets any mutations, deletions, and events recorded in …\nCharge an instruction and fail if not enough gas units are …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nMaintains all runtime state specific to programmable …\nMimics an immutable borrow by cloning the argument value …\nMimic a mutable borrow by taking the argument value, …\nGet the argument value. Cloning the value if it is …\nSpecial case errors for type arguments to Move functions\nConvert a VM Error to an execution one\nDelete an ID and update the state\nDetermine the object changes and collect all user events\nCreate a new ID and update the state\nReturns the argument unchanged.\nThe gas charger used for metering\nCalls <code>U::from(self)</code>.\nThe LinkageView for this session\nLoad <code>type_tag</code> to get a <code>Type</code> in the provided <code>session</code>.  …\nLoad a type using the context’s current session.\nLoad a type using the context’s current session.\nMetrics for reporting exceeded limits\nCreate a new package\nReturn the last package pushed in <code>write_package</code>. This …\nThe protocol config\nFinish a command: clearing the borrows and adding the …\nRestore an argument after being mutably borrowed\nSet the link context for the session from the linkage …\nThe global state, used for resolving packages\nTakes the user events from the runtime and tags them with …\nTransfer the object to a new owner\nA shared transaction context, contains transaction digest …\nCreate a package upgrade from <code>previous_package</code> with …\nThe MoveVM\nAdd a newly created package to write as an effect of the …\nAn ASCII encoded string\nAn option\nSpecial enum for values that need additional validation, …\nA UTF8 encoded string\nA vector\nChecks the bytes against the <code>SpecialArgumentLayout</code> using …\nreturns true iff all BCS compatible bytes are actually …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\n<code>ToString::to_string</code>, but without panic on OOM.\nExposes module and linkage resolution to the Move runtime. …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nIndicates whether this <code>LinkageView</code> has had its context set …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nRestore a previously saved linkage context.  Fails if …\nSet the linkage context to the information based on the …\nReset the linkage, but save the context that existed …\nCheck that this transaction neither creates nor destroys …\nCheck that this transaction neither creates nor destroys …\nIf there are unmetered storage rebate (due to system …\nCrate a new objcet. This is used to create objects outside …\nDelete a mutable input object. This is used to delete …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nBreak up the structure and return its internal stores …\nMutate a child object outside of PT. This should be used …\nMutate a mutable input object. This is used to mutate …\nCreates a new store associated with an authority store, …\nTake execution results v2, and translate it back to be …\nUpgrade system package during epoch change. This requires …\nRetrieve a <code>MoveStructLayout</code> from a <code>Type</code>. Invocation into …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.")