// GoDaddy makes a lot of difference top-level domains available to its customers. A top level Domain is one that goes directly after the last dot (“.”) in the domain name for .com example.com, To help the users choose from available domains. GoDaddy is introducing a new feature that shows the type of the chosen top-level domain. You have to implement this feature. To begin with you want to write a function that labels the domains as “commercial”. “organization”,

// Example:::::
// For domains = [“en.wiki.org”, “codefighters.com”, “happy.net”, “code.info”], the output should be 
// domainType(domain) = [“organization”, “commercial”, “network”, “information”]


const domains = ['enwiki.org','codegighter.com','happy.net','code.info']

function domainType(domains) {

  return domains.map((domain) => {
    const domainParts = domain.split('.').pop();
    switch (domainParts){
        case 'com':
            return 'commercial';
            case 'org':
                return 'organization';
                case 'net':
                    return 'network';
                    case 'info':
                        return 'information';
                        default:
                            return 'unknown';

    }
  })
   
}

function domainType2(domains) {
     return domains.map((domain)=>{
        const domainParts = domain.split('.').pop();
        const domainType = domainParts === 'org' ? 'organization' :
        domainParts === 'com' ? 'commercial' :
        domainParts === 'net' ? 'network' :
        domainParts === 'info' ? 'information' :
        'unknown';
        return domainType;
    })
}

const result = domainType2(domains); //[ 'organization', 'commercial', 'network', 'information' ]
console.log(result);