/**
 * 
 */
package com.star.sud.auth.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.star.sud.auth.bean.BasicAuthenticationBean;

/**
 * @author Sudarshan
 *
 */
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class StarterSecurityController {

	@GetMapping(path = "/authenticate")
	public BasicAuthenticationBean getAuthenticate() {
		 
		return new BasicAuthenticationBean("You are authenticated");
	}

}
