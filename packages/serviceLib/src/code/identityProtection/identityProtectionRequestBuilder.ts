import {IdentityProtectionRoot} from '../models/microsoft/graph/';
import {RiskDetectionsRequestBuilder} from './riskDetections/';
import {RiskDetectionRequestBuilder} from './riskDetections/item/';
import {RiskyUsersRequestBuilder} from './riskyUsers/';
import {RiskyUserRequestBuilder} from './riskyUsers/item/';
import {getPathParameters, HttpMethod, Parsable, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /identityProtection  */
export class IdentityProtectionRequestBuilder {
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    public get riskDetections(): RiskDetectionsRequestBuilder {
        return new RiskDetectionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get riskyUsers(): RiskyUsersRequestBuilder {
        return new RiskyUsersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new IdentityProtectionRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/identityProtection{?select,expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Get identityProtection
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @returns a RequestInformation
     */
    public createGetRequestInformation(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        if(h) requestInfo.headers = h;
        q && requestInfo.setQueryStringParametersFromRawObject(q);
        o && requestInfo.addRequestOptions(o);
        return requestInfo;
    };
    /**
     * Update identityProtection
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: IdentityProtectionRoot | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        if(h) requestInfo.headers = h;
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        o && requestInfo.addRequestOptions(o);
        return requestInfo;
    };
    /**
     * Get identityProtection
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of IdentityProtectionRoot
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<IdentityProtectionRoot | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.requestAdapter?.sendAsync<IdentityProtectionRoot>(requestInfo, IdentityProtectionRoot, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Update identityProtection
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: IdentityProtectionRoot | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.identityProtection.riskDetections.item collection
     * @param id Unique identifier of the item
     * @returns a riskDetectionRequestBuilder
     */
    public riskDetectionsById(id: string) : RiskDetectionRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["riskDetection_id"] = id
        return new RiskDetectionRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.identityProtection.riskyUsers.item collection
     * @param id Unique identifier of the item
     * @returns a riskyUserRequestBuilder
     */
    public riskyUsersById(id: string) : RiskyUserRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["riskyUser_id"] = id
        return new RiskyUserRequestBuilder(urlTplParams, this.requestAdapter);
    };
}