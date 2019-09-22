/**
 * 
 */
package com.star.sud.auth.bean;

/**
 * @author Sudarshan
 *
 */
public class BasicAuthenticationBean {

	private String message;

	public BasicAuthenticationBean(String message) {
		this.message = message;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return String.format("Basic Authentication [message=%s]", message);
	}
}
