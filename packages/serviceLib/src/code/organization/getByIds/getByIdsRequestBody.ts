import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getByIds method.  */
export class GetByIdsRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _ids?: string[] | undefined;
    private _types?: string[] | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Instantiates a new getByIdsRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["ids", (o, n) => { (o as unknown as GetByIdsRequestBody).ids = n.getCollectionOfPrimitiveValues<string>(); }],
            ["types", (o, n) => { (o as unknown as GetByIdsRequestBody).types = n.getCollectionOfPrimitiveValues<string>(); }],
        ]);
    };
    /**
     * Gets the ids property value. 
     * @returns a string
     */
    public get ids() {
        return this._ids;
    };
    /**
     * Sets the ids property value. 
     * @param value Value to set for the ids property.
     */
    public set ids(value: string[] | undefined) {
        this._ids = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfPrimitiveValues<string>("ids", this.ids);
        writer.writeCollectionOfPrimitiveValues<string>("types", this.types);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the types property value. 
     * @returns a string
     */
    public get types() {
        return this._types;
    };
    /**
     * Sets the types property value. 
     * @param value Value to set for the types property.
     */
    public set types(value: string[] | undefined) {
        this._types = value;
    };
}